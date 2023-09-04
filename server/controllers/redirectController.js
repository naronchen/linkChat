const axios = require('axios')
const sqlite3 = require('sqlite3').verbose();


exports.redirect = async (req, res) => {
    // @TODO make middleware handle this verification
    // verification for future deployment
    const clientToken = req.headers['x-api-key'];
    if (process.env.NODE_ENV === 'production' && clientToken !== 'my_server_secret_token'){
      return res.status(403).json({ error: 'Unauthorized' });
    }
  
    // sending the userInput
    const userInput = req.body.text;
    try {
      //@TODO send it with an api key or sth, so not exposing the AImodel
      const aiResponse = await axios.post('http://localhost:9000/mockAI', { input: userInput });
      const aiText = aiResponse.data.output;
      

      res.status(200).json({ output: aiText });
    } catch (error) {
      console.error('AI Model Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  