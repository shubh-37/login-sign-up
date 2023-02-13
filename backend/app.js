const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./db/connect");
const authController = require("./controllers/auth.js");
const auth = require("./controllers/auth.js");

//middlewares
app.use(express.json());

try {
  async function start() {
    const { Models } = await connectDB();
    authController(app, Models);
    app.listen(3000, console.log("server listening on port:3000"));
  }
  start();
} catch (error) {
  console.error("Sorry! Cannot start the server!", error);
}
