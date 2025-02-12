import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../HospitalHomePage/HomePage.css";

function Header() {
  const nav = useNavigate();
  return (
    <Box>
      <AppBar>
        <Toolbar className="topbar" style={{backgroundColor:"darkgreen"}}>
          <Box className="hospitaName">
            <Typography onClick={() => nav("/main")}>
              Health Tech
            </Typography>
          </Box>
          <Box className="NavLinks">
            <Typography
              className="HeaderTag"
              sx={{ cursor: "pointer" }}
              onClick={() => nav("/main/profile")}
            >
              Profile
            </Typography>
            {/* <Typography>Book Slot</Typography> */}
            {sessionStorage.getItem("role") === "Doctor" ? (
              <Typography
                className="HeaderTag"
                sx={{ cursor: "pointer" }}
                onClick={() => nav("/main/AppointmentAck")}
              >
                Appointments
              </Typography>
            ) : (
              <Typography
                className="HeaderTag"
                sx={{ cursor: "pointer" }}
                onClick={() => nav("/main/doctors")}
              >
                Book Appointment
              </Typography>
            )}
            {sessionStorage.getItem("role") === "Doctor" ? (
              <Typography
                className="HeaderTag"
                sx={{ cursor: "pointer" }}
                onClick={() => nav("/main/AppointmentAck")}
              >
                Doctor:{sessionStorage.getItem("uname")}
              </Typography>
            ) : (
              <Typography
                className="HeaderTag"
                sx={{ cursor: "pointer" }}
                onClick={() => nav("/main/doctors")}
              >
                Patient:{sessionStorage.getItem("uname")}
              </Typography>
            )}
            <Typography
              className="HeaderTag"
              sx={{ cursor: "pointer" }}
              onClick={() => nav("/")}
            >
              LogOut
            </Typography>
            {/* <Typography className="HeaderTag" sx={{cursor:'pointer'}}  onClick={()=>nav('/main/medicalStaff')}>Medical Staff</Typography> */}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;