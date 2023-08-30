const express = require('express') 
const cors = require('cors');

const corsOptions = require('./config/corsConfig');
const redirectRoutes = require('./routes/redirect');

const app = express() 
app.use(express.json());
app.use(cors(corsOptions));
app.use('/redirect', redirectRoutes);


app.get("/apiTest", (req,res) => {
    res.json({"users":["userOne", "userTwo", "userThree", "usrFour"]})
})

app.listen(5000, () => {
    console.log("Server started on port 5000")
})


