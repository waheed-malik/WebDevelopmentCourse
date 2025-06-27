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

// app.listen(3000)

const aexpress = require('express');
const app =express();

app.get("/", function(req,res){
    res.send("Champions");
})

app.get("/profile", function(req,res){
    res.send("Champion uska Coach");
})