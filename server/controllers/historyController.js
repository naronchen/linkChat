const axios = require('axios')
const sqlite3 = require('sqlite3').verbose();
const getHistoryDb = require('../dbConnection/db');

exports.history = async (req, res) => {
    // verification for future deployment
    const clientToken = req.headers['x-api-key'];
    if (process.env.NODE_ENV === 'production' && clientToken !== 'my_server_secret_token'){
      return res.status(403).json({ error: 'Unauthorized' });
    }
  
    try {
      let sql = "SELECT senderType, messageText FROM ChatMessages ORDER BY timestamp ASC";
      let db = getHistoryDb();

      db.all(sql, [], (err, rows) => {
        if (err) {
          console.error('Database Error:', err);
          return res.status(500).json({ error: 'Database Error' });
        } 
        res.status(200).json({ output: rows });
      })
    


    // res.status(200).json({ output: aiText });
    } catch (error) {
      console.error('AI Model Error:', error);
      res.status(500).json({ error: 'Database Error' });
    }
  };