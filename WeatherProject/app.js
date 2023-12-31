const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {

    res.sendFile(__dirname + '/index.html');
    
});

app.post("/", (req, res) => {

    const query = req.body.cityName;
    const apiKey = "0a3242b7a18b0ce48d4092951512825b";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units=" + unit;
    https.get(url, (response) => {
        console.log(response.statusCode);

        response.on("data", (data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imgUrl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
            res.setHeader('Content-Type', 'text/html');
            res.write("<h3>The weather is currently " + description + ".</h3>");
            res.write("<h1>The temperature in "+query+" is " + temp + " degrees Celsius.</h1>");
            res.write("<img src="+imgUrl+">");
            res.send();
        })
    });

})

    


app.listen(port, () => {
    console.log("The server is running on port " + port);
});