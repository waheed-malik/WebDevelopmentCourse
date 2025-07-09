const express = require('express');
const app = express();
const ownersRouter = require("./routes/ownersRouter");
const usersRouter= require("./routes/usersRouter");
const productRouter = require("./routes/productsRouter");
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
// const crypto = require("crypto");
const path = require("path");
// const multerconfig = require("./config/multerconfig");
// const user = require('./models/user');
// const upload = multerconfig; 

const config= require("./config/mongoose-connection");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());


app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productRouter);

app.listen(3000);