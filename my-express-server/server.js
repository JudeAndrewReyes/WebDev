const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("<h1>Hello World!</h1>");
})

app.get("/contact", (req, res) => {
    res.send("Contact me at example@gmail.com");
})

let bio = "My name is Jude Andrew Reyes. A Full-Stack Web Developer that has knowledge in multiple languages from front-end, back-end, and database design.";

app.get("/about", (req, res) => {
    res.send(bio);
})

app.get("/hobbies", (req, res) => {
    res.send("Planet hunting, Galaxy hopping, Universal fishing");
})

app.listen(port, () => {
    console.log("server started on port " + port);
});