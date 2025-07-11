const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/usersRouter');
const ownersRouter = require('./routes/ownersRouter');
const productsRouter = require('./routes/productsRouter');
require("dotenv").config();

require('./config/mongoose-connection'); // connect to MongoDB

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // good practice
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/owners', ownersRouter);
app.use('/products', productsRouter);

app.listen(3000, () => {
  console.log("✅ Server started on http://localhost:3000");
});
