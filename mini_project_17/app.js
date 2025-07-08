const express = require('express');
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/login', (req, res) => {
    res.render("login");
});

app.post('/register', async (req, res) => {
    const { email, password, username, name, age } = req.body;

    const existingUser = await userModel.findOne({ email });
    if (existingUser) return res.status(400).send("User already registered");

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const newUser = await userModel.create({
        username,
        email,
        age,
        name,
        password: hash
    });

    const token = jwt.sign({ email: newUser.email, userid: newUser._id }, "sdwd");
    res.cookie("token", token);
    res.send("Registered successfully");
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) return res.status(500).send("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(200).send("Incorrect password");

    const token = jwt.sign({ email: user.email, userid: user._id }, "sdwd");
    res.cookie("token", token);
    res.send("Logged in successfully");
});

app.get('/logout', (req, res) => {
    res.cookie("token", "")
    res.redirect("/login");
});

function

app.listen(3000, () => {
    console.log("✅ Server running on http://localhost: