const mongoose = require('mongoose');
const User = require("./User");

mongoose.connect("mongodb://localhost/testdb");

const user = new User({name: "Kyle", age: 26});
user.save().then