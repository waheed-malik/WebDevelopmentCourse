const express = require("express");
const router = express.Router();
const isloggedin = require("../middlewares/isLoggedIn");
const productModel = require("../models/product-model");
const userModel = require("../models/user-model");

// Home page
router.get("/", function (req, res) {
  let error = req.flash("error");
  res.render("index", { error, loggedin: false });
});

// 🛍️ SHOP page — fetch products from DB
router.get("/shop", isloggedin, async function (req, res) {
  const products = await productModel.find();
  let success = req.flash("success");
  res.render("shop", { products , success});
});

router.get("/cart", isloggedin, async function (req, res) {
  const products = await productModel.find();
let user = await userModel
.findOne({email: req.user.email})
.populate("cart");
const bill= (Number(user.cart[0].price)+20)-Number(user.cart[0].discount);


  res.render("cart" ,{ user, bill });
});

router.get("/addtocart/:productid", isloggedin, async function (req, res) {
  let user = await userModel.findOne({email: req.user.email});
  user.cart.push(req.params.productid);
  await user.save();
  req.flash("success", "Added to cart");
  res.redirect("/shop");
});

// 🚪 Logout
router.get("/logout", isloggedin, function (req, res) {
  res.clearCookie("token");
  req.flash("error", "You have been logged out");
  res.redirect("/");
});

module.exports = router;
