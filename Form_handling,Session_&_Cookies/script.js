// Form handling and working with the form
// handle backend process of froms making sure the data coming from any frontend

// Session cookie
   

const express = require('express');
const app = express();

app.use(express.json());
  app.use(express.urlencoded({extended:true}));  //These lines are middleware and are used to parse the incoming request data (body of the request) so your server can understand it.

app.get("/", function(req, res) {
    res.send("I am a Champion");
});
app.get("/about", function(req, res) {
    res.send("Champions");
});


app.listen(3000);