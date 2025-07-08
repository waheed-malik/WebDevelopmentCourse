const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const userModel = require('./models/user');
const postModel = require('./models/post');

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/postsystem")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log("❌ MongoDB connection error:", err));

// Setup
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to Post System");
});

// Show Create Post Form
app.get("/create-post", async (req, res) => {
  const users = await userModel.find();
  res.render("createpost", { users });
});

// Handle Post Creation via Username
app.post("/create-post", async (req, res) => {
  const { userid, postdata } = req.body;

  const user = await userModel.findOne({ username: userid });
  if (!user) return res.send("❌ User not found. Please check username.");

  const post = await postModel.create({
    postdata,
    user: user._id
  });

  user.posts.push(post._id);
  await user.save();

  res.send(`✅ Post created successfully for user ${user.username}`);
});

// Show User with Posts (populate posts)
app.get("/user/:id", async (req, res) => {
  const user = await userModel.findById(req.params.id).populate("posts");
  if (!user) return res.send("❌ User not found");

  res.json(user);
});

// Start Server
app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
