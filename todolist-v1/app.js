const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
const port = 3000;

const items = ["Buy food", "Cook food", "Eat food"];
const workItems =[];
// use to access view folder
app.set('view engine', 'ejs');
// use to access requests
app.use(bodyParser.urlencoded({ extended: true }));
// use to load the public folder
app.use(express.static("public"));

app.get("/", (req, res) => {

    const day = date.getDate();

    res.render("list", {
        listTitle: day,
        newListItems: items
    });

});

app.post("/", (req, res) => {

    const item = req.body.newItem;
    // console.log(req.body);

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
    const item = req.body.newItem;

    workItems.push(item);

    res.redirect("/work");
});

app.listen(port, () => {
    console.log("listening on port", port);
})