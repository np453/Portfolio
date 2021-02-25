const mongoose = require('mongoose');

const set = new mongoose.Schema({
    name:String,
    github:String,
    link:String,
    description:String,
    filename:String
});

module.exports = mongoose.model("Project" , set);