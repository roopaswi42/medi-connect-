import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { DoctorData } from "../DataDoctor";
//import ToggleOnTwoToneIcon from "@mui/icons-material/ToggleOnTwoTone";
//import ToggleOffTwoToneIcon from "@mui/icons-material/ToggleOffTwoTone";
import "./DoctorList.css";
// import { useNavigation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function DoctorsAppointment() {
  const nav = useNavigate();
  const [doctordata, setDoctorData] = useState(DoctorData);
  const [searchResult, setSearchResult] = useState(DoctorData);

  const handleSearch = (e) => {
    let result = doctordata.filter((key, index) => {
      if (
        key.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        key.specialist.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        return key;
      }
    });
    setSearchResult(result);
    console.log(result);
  };
  return (
    <Box className="Header">
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <TextField
          variant="outlined"
          label="Search Doctor"
          size="small"
          sx={{ width: "82%", marginLeft: "75px", marginBottom: "10px" }}
          onChange={handleSearch}
        />
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        <Box sx={{ width: "90%" }}>
          {searchResult.map((data, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                backgroundColor: "blueviolet",
                padding: "10px",
                width: "90%",
                marginBottom: "10px",
              }}
            >
              <Avatar>RG</Avatar>
              <Box>
                <Typography sx={{ color: "whitesmoke", textAlign: "left" }}>
                  {data.name}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ textAlign: "left" }}>
                  {data.specialist}
                </Typography>
              </Box>
              <Box>
                <Typography>5+ Years Experience </Typography>
              </Box>
              <Button
                color="inherit"
                sx={{ color: "black" }}
                variant="contained"
                onClick={() => nav(data.route, { state: data })}
              >
                BOOK APPOINTMENT
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default DoctorsAppointment;