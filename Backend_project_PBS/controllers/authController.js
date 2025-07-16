const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/generateToken");

// Register User
module.exports.registerUser = async function (req, res) {
  try {
    const { email, password, fullname } = req.body;

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(401).send("You already have an account, please login.");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await userModel.create({
      email,
      password: hashedPassword,
      fullname,
    });

    const token = generateToken(newUser);
    res.cookie("token", token);
    res.send("User created successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Login User
module.exports.loginUser = async function (req, res)
{
  let{ email,password } = req.body;

  let user = await userModel.findOne({email: email});
  if(!user){
    req.flash("error","Email or Password incorrect");
    return res.redirect("/");
  }

  bcrypt.compare(
password,user.password, function(req,result){
  if(result){
   let token = generateToken(user);
    res.cookie("token", token);
    res.redirect("/shop");
  }
  else{
    req.flash("error","Email or Password incorrect");
    return res.redirect("/");
  }
}
  )
}
// module.exports.loginUser = async function (req, res) {
//   const { email, password } = req.body;

//   const user = await userModel.findOne({ email });
//   if (!user) {
//     return res.status(401).send("Email or Password incorrect");
//   }

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) {
//     return res.status(401).send("Email or Password incorrect");
//   }
// };
  module.exports.logout =function(req,res){
    res.cookie("token", "");
    res.redirect("/");
  };

//   const token = generateToken(user);
//   res.cookie("token", token);
//   res.send("Login successful");
// };
