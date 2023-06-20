const express = require('express');
const https = require('https');

const app = express();
const port = 3000;

app.get("/", (req, res) => {

    let url = "https://api.openweathermap.org/data/2.5/weather?q=Batangas&appid=0a3242b7a18b0ce48d4092951512825b&units=metric";
    https.get(url, (response) => {
        console.log(response);
    });

    res.send("Welcome");
});


app.listen(port, () => {
    console.log("The server is running on port " + port);
});