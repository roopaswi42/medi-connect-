const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const router = require("./routes");



require("dotenv").config();
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./"));

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3001', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
// app.use(cors());
// const cors = require('cors')
// app.use(passport.initialize());
// app.use(passport.session());

connectDB();

// passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

app.use("/", router);

app.listen(process.env.PORT || 5000, () => {
  console.log("server is running!");
});
