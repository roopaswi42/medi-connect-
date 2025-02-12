const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  usertype: String,
  name: String,
  age: String,
  dateofbirth: String,
  bloodgroup: String,
  city: String
  });

  
  
const User = new mongoose.model("users", userSchema);

module.exports = User; 
