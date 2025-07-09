const express = require('express');
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const crypto = require("crypto");
const path = require("path");
const multerconfig = require("./config/multerconfig");
const user = require('./models/user');
const upload = multerconfig; 

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());


app.get('/', (req, res) => {
    res.render("index");
});

app.get('/profile/upload', (req, res) => {
    res.render("profileupload");
});

app.post('/upload', isLoggedIn, upload.single("image"), async (req, res) => {
 let user = await userModel.findOne({email: req.user.email});
  user.profilepic = req.file.filename;
  await user.save()
  res.redirect("/profile")
  
});





app.get('/login', (req, res) => {
    res.render("login");
});

app.get('/profile', isLoggedIn,async (req, res) => {
    let user = await userModel.findOne({email: req.user.email}).populate("posts");
  
    res.render("profile", {user});
}); // Show user profile

app.get("/like/:id", isLoggedIn,async (req, res) => {
    let post = await postModel.findOne({_id: req.params.id}).populate("user");

    if(post.likes.indexOf(req.user.userid)=== -1){
        post.likes.push(req.user.userid);
    }
    else{
       post.likes.splice( post.likes.indexOf(req.user.userid),1);
    }

   await post.save();
    res.redirect("/profile");
}); // Show user likes

app.get("/edit/:id", isLoggedIn,async (req, res) => {
    let post = await postModel.findOne({_id: req.params.id}).populate("user");

     res.render('edit',{post});  
}); //for edit

app.post("/update/:id", isLoggedIn,async (req, res) => {
    let post = await postModel.findOneAndUpdate({_id: req.params.id},{content:req.body.content})
res.redirect("/profile");
}); //for edit

app.post('/post', isLoggedIn, async (req, res) => {
    let user = await userModel.findOne({email: req.user.email});
    let {content} = req.body;

 let post= await  postModel.create({
        user: user._id,
        content
    });

    user.posts.push(post._id);
    await user.save();
    res.redirect("/profile");
}); // Show user post


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
    let { email, password } = req.body;

    let user = await userModel.findOne({ email });
    if (!user) return res.status(500).send("Something went wrong");

    bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
            let token = jwt.sign({ email: email, userid: user._id }, "sdwd");
            res.cookie("token", token);
            res.status(200).redirect("/profile");
        } else {
            res.redirect("/login");
        }
    });
});


app.get('/logout', (req, res) => {
    res.cookie("token", "");
    res.redirect("/login");
});

function isLoggedIn(req, res, next) {
    if (!req.cookies.token || req.cookies.token === "") {
        return res.redirect("/login");
    }

    const data = jwt.verify(req.cookies.token, "sdwd");
    req.user = data;
    next();
}



app.listen(3000, () => {
    console.log("✅ Server running on http://localhost:3000");
});
