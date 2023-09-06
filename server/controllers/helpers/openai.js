const axios = require('axios');

async function getGPT3Response(context, userInput) {
  try {
    const api_key = process.env.OPENAI_API_KEY;

    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo-0613', 
        max_tokens: 500, 
      messages: [
        {
          role: 'system',
          content: 'CONCISELY summarize, organize and analyze linkedin messages in the context,user is Naron, 400maxtoken',
        },
        {
          role: 'user',
          content: context,
        },
        {
          role: 'user',
          content: userInput,
        },
      ],
    }, {
      headers: {
        'Authorization': `Bearer ${api_key}`, // Replace with your actual API key
        'Content-Type': 'application/json',
      },
    });

    const aiText = response.data.choices[0].message.content;
    return aiText;
  } catch (error) {
    console.error('Error:', JSON.stringify(error.response.data, null, 2))
    throw error;
  }
}

module.exports = {
  getGPT3Response,
};
