const express = require("express");
const bodyParser = require("body-parser");
// const ejs = require("ejs");

const app = express();
const port = 3000;

let items = ["Buy food", "Cook food", "Eat food"];
let workItems =[];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
// use to load the public folder
app.use(express.static("public"));

app.get("/", (req, res) => {

    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-PH", options)

    res.render("list", {
        listTitle: day,
        newListItems: items
    });

});

app.post("/", (req, res) => {

    let item = req.body.newItem;
    console.log(req.body);

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }

});

app.get("/work", (req, res) => {
    res.render("list", {
        listTitle: "Work List",
        newListItems: workItems
    });
});

app.post("/work", (req, res) => {
    let item = req.body.newItem;

    workItems.push(item);

    res.redirect("/work");
});

app.listen(port, () => {
    console.log("listening on port", port);
})