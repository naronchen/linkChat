const express = require('express') //import Express library
const app = express() //creates a new Express application

app.get("/api", (req,res) => {
    res.json({"users":["userOne", "userTwo", "userThree", "usrFour"]})
})

app.listen(5000, () => {
    console.log("Server started on port 5000")
})
