const express = require('express');
const path = require('path');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as View Engine
app.set('view engine', 'ejs');

// Routes
app.get("/", (req, res) => {
    res.render("index", { title: "Waheed's Express Demo", username: "Waheed" });
});

app.get("/user/:name", (req, res) => {
    res.send(`Hello, ${req.params.name}!`);
});

// Start Server
app.listen(3000, () => {
    console.log("✅ Server running at http://localhost:3000");
});
