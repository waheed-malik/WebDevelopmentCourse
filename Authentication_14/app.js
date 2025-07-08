const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.get("/", function(req, res) {
    // bcrypt.genSalt(10, function(err, salt) {
    //     bcrypt.hash("polololololo", salt, function(err, hash) {
    //         if (err) return res.send("Error in hashing");
    //         console.log("Hashed password:", hash);
    //         res.send("Password hashed and printed in console");
    //     });
    // });

//     bcrypt.compare(polololololo, $2b$10$kREtVE1J5DRxaigqiGHCwePsGTSrdNZMSfNnC0rmejYRVEEw7W9Uq, function(err, result) {
//     console.log(result);
// });

// jwt
let token=jwt.sign({email:"waheed@gmail.com"}, "secret");
res.cookie("token", token);
res.send("done")
});

app.get("/read", function(req,res){
    jwt.verify(req.coookies.token, "secret");
    console.log(data);
})

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
