const axios = require('axios')
const getHistoryDb = require('../dbConnection/db');

exports.redirect = async (req, res) => {

    // @TODO make middleware handle this verification
    // verification for future deployment

    if (process.env.NODE_ENV === 'production'){
      const clientToken = req.headers['x-api-key'];
      if (clientToken !== 'my_server_secret_token'){
        return res.status(403).json({ error: 'Unauthorized' });
      }
    }

    // sending the userInput
    let db = getHistoryDb();
    // @Note saving usr input first in case of AI response failure
    // @TODO implement sessions for chats
    let sessionID = 1;
    const userInput = req.body.text;
    let sql =  `INSERT INTO ChatMessages (sessionID, messageText, senderType) VALUES (?, ?, 'user')`
    db.run(sql, [sessionID, userInput], function(err){

      if (err){
        return console.error(err.message)
      }
    })

    // // Update or insert ChatSession first (this would ideally be in another function)
    // let updateSessionSQL = `INSERT OR REPLACE INTO ChatSession (sessionID, lastUpdated) VALUES (?, datetime('now'))`;
    // db.run(updateSessionSQL, [sessionID], function (err) {
    //   if (err) {
    //     return console.error(err.message);
    //   }
    // });

    try {

      //@TODO send it with an api key or sth, so not exposing the AImodel
      const aiResponse = await axios.post('http://localhost:9000/mockAI', { input: userInput });

      const aiText = aiResponse.data.output;

      let sql =  `INSERT INTO ChatMessages (sessionID, messageText, senderType) VALUES (?, ?, 'chatbot')`
      db.run(sql, [sessionID, aiText], function(err){
        if (err){
          return console.error(err.message)
        }
      })
      res.status(200).json({ output: aiText });
    } catch (error) {
      console.error('Redirecting to AI Model Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  