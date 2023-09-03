const axios = require('axios')
const sqlite3 = require('sqlite3').verbose();


exports.history = async (req, res) => {
    // verification for future deployment
    const clientToken = req.headers['x-api-key'];
    if (process.env.NODE_ENV === 'production' && clientToken !== 'my_server_secret_token'){
      return res.status(403).json({ error: 'Unauthorized' });
    }
  
    try {
      res.json({"Database":"Hello"})
    

    // res.status(200).json({ output: aiText });
    } catch (error) {
      console.error('AI Model Error:', error);
      res.status(500).json({ error: 'Database Error' });
    }
  };