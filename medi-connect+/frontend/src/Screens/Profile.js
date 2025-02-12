import {
    AppBar,
    Avatar,
    Box,
    Button,
    Toolbar,
    Tooltip,
    Typography,
  } from "@mui/material";
  import { deepOrange } from "@mui/material/colors";
  import { useState } from "react";
  import DetailsOfVisitScreen from "./DetailsOfVisitScreen";
  import "./profile.css";
  import axios from "axios";
  import { useEffect } from "react";
  
  function Profile() {
    const [openhist, SetOpenHist] = useState(false);
    const [profile, setProfile] = useState([]);
    const [history, setHistory] = useState([]);
  
    useEffect(() => {
      getDetails();
      getViewHistory();
    }, []);
  
    const getViewHistory = (data) => {
      console.log("confirmmmm.....");
      axios
        .post("http://localhost:5000/hospital/getViewHistory", {
          username: "Charishma",
        })
        .then((res) => setHistory(res.data))
        .catch((err) => console.log(err));
    };
  
    const getDetails = () => {
      axios
        .post("http://localhost:5000/hospital/login", {
          username: "robert",
          password: "nag123",
        })
        .then((res) => {
          setProfile(res.data.docs[0]);
          console.log(res.data.docs[0]);
        })
        .catch((err) => console.log(err));
    };
  
    return (
      <Box className="profile_container">
        {sessionStorage.getItem("role") !== "Doctor" ? (
          <Box className="profile_container">
            <Box className="sidebar">
              <Box className="Avatar">
                <Avatar
                  sx={{ bgcolor: deepOrange[800], width: 200, height: 200 }}
                >
                  MN
                </Avatar>
              </Box>
              <Box className="AvatarPersonalDetails">
                <Box className="keys">
                  <Typography className="key">NAME: </Typography>
                  <Typography className="key">AGE :</Typography>
                  <Typography className="key">DATE OF BIRTH:</Typography>
                  <Typography className="key">BLOOD GROUP:</Typography>
                  <Typography className="key">CITY:</Typography>
                  {/* <Typography className="key">RECENT VISTED DATE:</Typography> */}
                </Box>
                <Box className="values">
                  <Typography className="value">
                    {" "}
                    {sessionStorage.getItem("uname")}{" "}
                  </Typography>
                  <Typography className="value">{profile.age} </Typography>
                  <Typography className="value">{profile.dateofbirth}</Typography>
                  <Typography className="value">{profile.bloodgroup}</Typography>
                  <Typography className="value"> {profile.city}</Typography>
                  {/* <Typography className="value"> {profile.dateofbirth}</Typography> */}
                </Box>
              </Box>
            </Box>
            <Box className="patientHistory">
              <Box sx={{ marginBottom: "10px" }}>
                <Toolbar sx={{ backgroundColor: "navy", color: "white" }}>
                  VISIT HISTORY
                </Toolbar>
              </Box>
              {history.map((d) => (
                <Box>
                  <Box sx={{ marginBottom: "10px" }}>
                    <Toolbar sx={{ backgroundColor: "navy", color: "white" }}>
                      VISIT HISTORY
                    </Toolbar>
                  </Box>
                  <Box className="visitHistory">
                    <Box className="Reason">
                      <Typography>Reason :</Typography>
                      <Typography>{d.reason}</Typography>
                    </Box>
                    <Box className="Consulted_doctor">
                      <Typography>Doctor :</Typography>
                      <Typography>{d.doctor}</Typography>
                    </Box>
                    <Box className="appt_date">
                      <Typography>Date :</Typography>
                      <Typography>{d.date.split("T")[0]}</Typography>
                    </Box>
                    <Button color="primary" onClick={() => SetOpenHist(true)}>
                      View History
                    </Button>
                  </Box>
                </Box>
              ))}
            </Box>
            <Box>
              {openhist ? (
                <DetailsOfVisitScreen
                  onOpen={openhist}
                  onClose={() => SetOpenHist(false)}
                  sx={{
                    "& .MuiDialog-root": {
                      borderRadius: "100px",
                      boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75);",
                      //   zIndex: "9999 !important",
                    },
                  }}
                />
              ) : null}
            </Box>
          </Box>
        ) : (
          <Box className="sidebar2">
            {/* <Box sx={{display:'flex',flexDirection:'row'}}> */}
            <Box
              className="Avatar"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Avatar sx={{ bgcolor: deepOrange[800], width: 200, height: 200 }}>
                MN
              </Avatar>
            </Box>
            <Box className="AvatarPersonalDetails">
              <Box className="keys">
                <Typography className="key">NAME: </Typography>
                <Typography className="key">AGE :</Typography>
                <Typography className="key">DATE OF BIRTH:</Typography>
                <Typography className="key">BLOOD GROUP:</Typography>
                <Typography className="key">CITY:</Typography>
                <Typography className="key">EMAIL</Typography>
                <Typography className="key">EXPERINCE</Typography>
              </Box>
              <Box className="values">
                <Typography className="value">
                  {" "}
                  {sessionStorage.getItem("uname")}{" "}
                </Typography>
                <Typography className="value">{profile.age} </Typography>
                <Typography className="value">{profile.dateofbirth}</Typography>
                <Typography className="value">{profile.bloodgroup}</Typography>
                <Typography className="value"> {profile.city}</Typography>
                <Typography className="value">{sessionStorage.getItem("uname")}@gmail.com</Typography>
                <Typography className="value"> 5+</Typography>
              </Box>
            </Box>
            {/* </Box> */}
          </Box>
        )}
      </Box>
    );
  }
  
  export default Profile;