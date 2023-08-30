const axios = require('axios')

exports.redirect = async (req, res) => {
    // verification for future deployment
    const clientToken = req.headers['x-api-key'];
    if (process.env.NODE_ENV === 'production' && clientToken !== 'my_server_secret_token'){
      return res.status(403).json({ error: 'Unauthorized' });
    }
  
    // sending the userInput
    const userInput = req.body.text;
    try {
      const aiResponse = await axios.post('AI_Model_URL', { input: userInput });
      const aiText = aiResponse.data.output;
  
      res.status(200).json({ output: aiText });
    } catch (error) {
      console.error('AI Model Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  