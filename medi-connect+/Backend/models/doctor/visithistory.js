const mongoose = require("mongoose");
  
const visitHistorySchema = new mongoose.Schema({
  username: String,
  reason: String,
  doctor: String,
  date: String,
  PatientName: String,
  age: String,
  email: String,
  phoneNumber: String,
  status: String
  });
const VisitHistory = new mongoose.model("visithistorys", visitHistorySchema);

module.exports = VisitHistory; 
