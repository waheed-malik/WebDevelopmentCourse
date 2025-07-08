const express =require('express');
const app = express();

const userModel =require('./usermodel');

app.get('/', (req,res)=>{
    res.send("hey");
})

// create
app.get('/create', async (req,res)=>{
   let createduser= await userModel.create({
        name:"Waheed",
        email:"whtimetik@gmail.com",
        username:"waheed"
    })
    res.send(createduser);
})
app.get('/create', async (req,res)=>{
   let createduser= await userModel.create({
        name:"Malik",
        email:"local@gmail.com",
        username:"hussain"
    })
    res.send(createduser);
})

  // read
        app.get("/read", async(req,res)=>{
            let users =await userModel.find();
            res.send(users);
        })
// update
        app.get('/update', async (req,res)=>{

        let updateduser = await userModel.findOneAndUpdate({
            username: "waheed"},
            {name: "waheed"}, {email:"whtimetik@gmail.com"})       
        res.send(updateduser);
        })

       // Delete
         app.get("/delete", async(req,res)=>{
            let users =await userModel.findOneAndDelete({username: "waheed"});
            res.send(users);
        })

app.listen(3000);