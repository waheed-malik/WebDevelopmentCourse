// Express.js Framework:

// Introduction to Express.js.
    //  express js ek npm package hai
    //framework->  
    // manages everything from receiving the    request and giving the response

// setting up a basic Express application.
// Routing. 
// Middleware.
// Request and Response handling.
// Error handling



// import express from 'express'

// const app = express()

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })



// // Routing
// const express = require('express');
// const app = express();

// // Route 1: Root endpoint
// app.get("/", function(req, res) {
//     res.send("Champions");
// });

// // Route 2: Profile endpoint
// app.get("/profile", function(req, res) {
//     res.send("Champion uska Coach");
// });

// // Start server on port 3000
// app.listen(3000);


// Middleware
const express = require('express');
const app = express();

app.use(function(req,res,next){
    console.log('middleware chala');
    next();
});


app.get("/", function(req, res) {
    res.send("Champions");
});
app.get("/about", function(req, res, next) {
    return next(new Error("somthing went wrong"))
});


app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send ("somthing went wrong, we don't have any idea")
})
app.listen(3000);

