const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/testapp1");

const userSchema= mongoose.Schema({
    image: String,
    email: String,
    name: String

})

const User = mongoose.model('User', userSchema); // ✅ Register the schema with a name

module.exports = User;