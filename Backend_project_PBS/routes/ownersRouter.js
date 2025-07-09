const express = require('express');
const router = express.Router();
const ownerModel = require("../models/owner-model");

// ✅ Always define route, or control access inside the route instead
router.post("/create", async function (req, res) {
  try {
    // Optional: only allow in development mode
    if (process.env.NODE_ENV !== "development") {
      return res.status(403).send("You don't have permission to create a new owner.");
    }

    let owners = await ownerModel.find();

    if (owners.length > 0) {
      return res.status(503).send("You don't have permission to create a new owner.");
    }

    const { fullname, email, password } = req.body;

    const createdOwner = await ownerModel.create({
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

router.get("/", function (req, res) {
  res.send("hey its working");
});

module.exports = router;
