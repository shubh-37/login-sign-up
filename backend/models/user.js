const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide username"],
    unique: [true, "This username already exists"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
});

module.exports = userSchema;
