const express = require("express");
// const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
    // console.log(__dirname + "/index.html");
});

app.listen(port, () => {
    console.log("Listening to port ", port);
})