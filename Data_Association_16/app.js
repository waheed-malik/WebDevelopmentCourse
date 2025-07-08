const express = require('express');
const app = express();
const userModel =require("./models/user");
const postModel =require("./models/post");

app.get("/", function (req,res){
    res.send("hi");
})

app.get("/create",async function (req,res){
    let user= await userModel.create({
        username: "Waheed",
        age:25,
        email:"whtimetik@gmail.com"
    });

    res.send(user);
})
app.get("/post/create",async function (req,res){
    let post= await postModel.create({
        postdata: "Helo kaise ho",
        user: "686ba36a634e46176d809c48",

    })

    let user = await userModel.findOne({_id:"686ba36a634e46176d809c48"});
    user.posts.push(post._id);
    await user.save();
  
    res.send({post,user});
})
app.listen(3000);