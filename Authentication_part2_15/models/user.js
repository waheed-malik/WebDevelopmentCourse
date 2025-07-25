const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/authtestapp');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    age: Number
}, { timestamps: true });

module.exports = mongoose.model("user", userSchema);
