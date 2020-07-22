const express = require("express");
const dotenv = require("dotenv");
const colors = require('colors');
const morgan = require("morgan");

const connectDB = require("./server/config/db");

// load dotenv files
dotenv.config({ path: "./server/config/.env" });

const app = express();

// Body parser
app.use(express.json())

//Connect to database
connectDB();

// Dev logging middleware
  app.use(morgan("dev"));

  // Routes
  app.use('/api/auth',require('./server/router/Auth'))
  app.use('/api/post',require('./server/router/Post'))

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`.blue.bold);
});
