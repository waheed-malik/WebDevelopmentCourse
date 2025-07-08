const express = require('express');
const app = express();
const path = require('path');
const cookieParser =require('cookie-parser');
const userModel = require("./models/user");
const bcrypt =require('bcrypt');
const jwt =require('jsonwebtoken');
const { appendFileSync } = require('fs');
// Correct view engine setup
app.set("view engine", "ejs");

// Correct middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

// Routes
app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.post('/create',  (req, res) => {
    let {username,email,password, age}=req.body;

bcrypt.genSalt(10,  (err,salt)=>{
    bcrypt.hash(password,salt,async (err,hash)=>{
            let createdUser = await userModel.create({
            username,
            email,
            password:hash,
            age
        })

        let token= jwt.sign({email}, "shahih");
        res.cookie("token", token);
        res.send(createdUser);
    })
})


});

app.get("/login", function(req,res){
res.render('login');
});

app.post("/login",async function(req,res){
let user=await userModel.findOne({email:req.body.email});
if(!user) return res.send("Something is Wrong");

bcrypt.compare(req.body.password, user.password,  function (err,result){
    if(result){ 
         let token= jwt.sign({email: user.email}, "shahih");
        res.cookie("token", token);
        res.send("Yes you can login");
    }
    else res.send ("Something is Wrong")
  
})
});

app.get("/logout", function(req,res){
res.cookie("token","");
res.redirect("/");
})

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
