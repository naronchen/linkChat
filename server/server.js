const express = require('express') 
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const corsOptions = require('./config/corsConfig');
const setupDatabase = require('./databaseSetup');
const redirectRoutes = require('./routes/redirect');
const historyRoutes = require('./routes/history')

const app = express() 
app.use(express.json());
app.use(cors(corsOptions));
const historyDB = setupDatabase();  // Initialize database

app.use('/redirect', redirectRoutes);
app.use('/history', historyRoutes)


app.get("/apiTest", (req,res) => {
    res.json({"users":["userOne", "userTwo", "userThree", "usrFour"]})
})

app.listen(5000, () => {
    console.log("Server started on port 5000")
})


