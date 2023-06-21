const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
    
    let firstName = req.body.fname;
    let lastName = req.body.lname;
    let email = req.body.email;

});

app.listen(port, () => {
    console.log("Server is running on port " + port);
});