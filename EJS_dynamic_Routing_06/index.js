// Initialize a project with npm:
// npm init -y
// Install Express:
// npm install express
// Install EJS:
// npm install ejs

// Required Modules
const express = require('express');
const app = express();
const path = require('path');  //  You missed requiring 'path'



// Setting up parsers for JSON and Form Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setting up Public Static Files (e.g., CSS, JS, Images)
app.use(express.static(path.join(__dirname, 'public')));

// Setting up EJS as View Engine
app.set('view engine', 'ejs');  // 'engin' should be 'engine'

// Dynamic Routing - Render EJS Page
app.get("/", function (req, res) {
    res.render("index");  // No need to write "index.ejs"
});

app.get("/waheed/:username", function (req, res) {
    res.send(`welcome,${req.params.username}`);
});

app.get("/author/:username/:age", function (req, res) {
    res.send(`welcome,${req.params.username} of age ${req.params.age}`);
});
// Server Start
app.listen(3000, function () {
    console.log("Server is running on http://localhost:3000");
});
