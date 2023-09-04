const express = require('express') 
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const getHistoryDb = require('./dbConnection/db');
const corsOptions = require('./config/corsConfig');
const redirectRoutes = require('./routes/redirect');
const historyRoutes = require('./routes/history')

const app = express() 
app.use(express.json());
app.use(cors(corsOptions));
getHistoryDb(); // Initialize singleton databaseb connection

app.use('/redirect', redirectRoutes);
app.use('/history', historyRoutes)


app.get("/apiTest", (req,res) => {
    res.json({"users":["userOne", "userTwo", "userThree", "usrFour"]})
})

app.listen(5000, () => {
    console.log("Server started on port 5000")
})


