const mongoose = require('mongoose');
const blog = new mongoose.Schema({
    name:String,
    email:String,
    title:String,
    date:String,
    content:String,
    filename:String,
    admincheck:String //pending,posted,declined
})

module.exports = mongoose.model('Blog',blog);