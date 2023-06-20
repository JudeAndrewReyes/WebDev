const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
    // console.log(__dirname + "/index.html");
});

app.listen(port, () => {
    console.log("Listening to port ", port);
});

app.post("/", (req, res) => {
    let num1 = Number(req.body.n1);
    let num2 = Number(req.body.n2);
    let result = num1 + num2;

    res.send("The result of the calculation is " + result);
});

// bmi get and post request
app.get("/bmicalculator", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", (req, res) => {
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);
    let bmi = weight / (height ** 2);
    res.send("Your BMI is " + bmi);
});
