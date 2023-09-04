const express = require('express');
const app = express();

app.use(express.json());

// Mock AI response
app.post('/mockAI', (req, res) => {
  res.json({ output: 'Hello from mockAI responding to: ' + `${req.body.input}` });
});

app.get("/apiTest", (req,res) => {
  res.json({"users":["userOne", "userTwo", "userThree", "usrFour"]})
})

// Run Mock server
app.listen(9000, () => {
  console.log('Mock AI server running on port 9000');
});

