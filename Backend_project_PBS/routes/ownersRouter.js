const express = require('express');
const router = express.Router();
const ownerModel = require("../models/owner-model");

// ✅ Always define route, or control access inside the route instead
router.post("/create", async function (req, res) {
  try {
    // Only allow in development (prevent in production)
    if (process.env.NODE_ENV !== "development") {
      return res.status(403).send("You don't have permission to create a new owner.");
    }

    const owners = await ownerModel.find();
    if (owners.length > 0) {
      return res.status(503).send("Owner already exists.");
    }

    let { fullname, email, password } = req.body;

    let createdOwner = await ownerModel.create({
      fullname,
      email,
      password,
    });

    res.status(201).send(createdOwner);
  } catch (err) {
    console.error("Error creating owner:", err);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/admin", function (req, res) {
  const success = req.flash("success");
  res.render("createproducts", { success });
});


module.exports = router;
