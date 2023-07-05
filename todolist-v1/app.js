const express = require("express");
const bodyParser = require("body-parser");
// const ejs = require("ejs");

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get("/", (req, res) => {

    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-PH", options)

    res.render("list", {
        kindOfDay: day
    });

});



app.listen(port, () => {
    console.log("listening on port", port);
})