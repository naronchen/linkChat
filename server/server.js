const express = require('express') //import Express library
const app = express() //creates a new Express application

const cors = require('cors');

// Allow only certain origins, adjust as needed
app.use(cors({
  origin: ['http://localhost:5000', 'http://localhost:5173']
}));

app.get("/api", (req,res) => {
    res.json({"users":["userOne", "userTwo", "userThree", "usrFour"]})
})

app.listen(5000, () => {
    console.log("Server started on port 5000")
})
