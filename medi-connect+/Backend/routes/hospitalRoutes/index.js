const router = require("express").Router();
const User = require("../../models/doctor/user");
const VisitHistory = require("../../models/doctor/visithistory");
const Patient = require("../../models/patients/patient");


router.post("/signUp", (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    usertype: req.body.usertype,
    name: req.body.name,
    age: req.body.age,
    dateofbirth: req.body.dateofbirth,
    bloodgroup: req.body.bloodgroup,
    city: req.body.city
  });

  user.save().then(() => {
    res.send("success");
  });


});

router.post("/login", (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password,
  };
  User.find(user)
    .then((docs) => {
      console.log("Result :", docs);
      if (docs.length > 0) {
        res.json({ "Message": "Success","docs":docs });
      } else {
        res.json({ "Message": "Failed" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});


router.post("/bookAppointment", (req, res) => {
  console.log("user is getting");
  const user1 = new VisitHistory({
    reason: req.body.reason,
    username: req.body.username,
    status:"PENDING",
    doctor: req.body.doctor,
    date: req.body.date,
    PatientName: req.body.PatientName,
    age: req.body.age,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber
  });
  console.log(user1);
  user1.save().then(() => {
    res.send("success");
  });
});

router.post("/getViewHistory", (req, res) => {
let userName={"username":req.body.username}
VisitHistory.find(userName).then((result) => {
  res.send(result);
});
});

router.post("/getpendingAppointmentList", (req, res) => {
  let whereObj={"doctor":req.body.doctor,"status":"PENDING"}
  VisitHistory.find(whereObj).then((result) => {
    res.send(result);
  });
});

  router.post("/getacceptedAppointmentList", (req, res) => {
    let whereObj={"doctor":req.body.doctor,"status":"ACCEPTED"}
    VisitHistory.find(whereObj).then((result) => {
      res.send(result);
    });
});

    router.post("/acceptrejectAppointmentList", (req, res) => {
      let whereObj={
      username: req.body.username,
      status:"PENDING",
      doctor: req.body.doctor,
      date: req.body.date,
      PatientName: req.body.PatientName,
      age: req.body.age,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber}
      console.log("getting value is ",whereObj);
      VisitHistory.findOneAndUpdate(whereObj,{status:req.body.status}).then((result) => {
        res.send(result);
      });

});
module.exports = router;