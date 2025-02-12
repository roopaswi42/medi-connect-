import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
//import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import "./HomePage.css";

function HomePage() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "whitesmoke",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            marginTop: "70px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            padding: "20px",
            width: "100%",
          }}
        >
          <Box sx={{ marginRight: "20px" }}>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  color: "orangered",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  textAlign: "left",
                }}
              >
                <br></br><br></br>
                MEDI CONNECT+
              </Typography>
            </Box>
            <Box sx={{ marginBottom: "20px" }}>
              <Typography
                variant="h4"
                sx={{ color: "seagreen", letterSpacing: 1, textAlign: "left" }}
              >
              Connecting Health 
              </Typography>
              <Typography
                variant="h4"
                sx={{ color: "seagreen", letterSpacing: 1, textAlign: "left" }}
              >
               Simplfying care 
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{ letterSpacing: 1, textAlign: "left" }}
              >
               MediConnect simplifies interactions,
              </Typography>
              <Typography
                variant="h6"
                sx={{ letterSpacing: 1, textAlign: "left" }}
              >
              schedules appointments, and centralizes health reports   
              </Typography>
              <Typography
                variant="h6"
                sx={{ letterSpacing: 1, textAlign: "left" }}
              >
               for a seamless patient-professional experience.  
              </Typography>
            </Box>
          </Box>
          <Box>
            <img src={require("../asserts/doctors.jpeg")} width="1000" height="600"/>
             </Box>
        </Box>
      </Box>
      {/* HOSPITAL STATS */}
      {/* <Box className="statsOfHospital">
        <Box className="hospialstat">
          <Typography className="statNumber">102</Typography>
          <Typography className="statText">DOCTORS</Typography>
        </Box>
        <Box className="hospialstat">
          <Typography className="statNumber">15</Typography>
          <Typography className="statText">CLINICS</Typography>
        </Box>
        <Box className="hospialstat">
          <Typography className="statNumber">10</Typography>
          <Typography className="statText">SURGERY ROOMS</Typography>
        </Box>
        <Box className="hospialstat">
          <Typography className="statNumber">1000+</Typography>
          <Typography className="statText">PATIENT CAPACITY</Typography>
        </Box>
        <Box className="hospialstat">
          <Typography className="statNumber">879</Typography>
          <Typography className="statText">MEDICAL STAFF</Typography>
        </Box>
      </Box> */}
      {/* Top Directors */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          padding: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "fit-content", margin: "20px" }}>
            <Typography sx={{ color: "#18a1c6", fontSize: "24px" }}>
              Our Team
            </Typography>
            <Typography sx={{ color: "#003953", fontSize: "34px" }}>
              Meet With Doctors
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            padding: "10px",
          }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 150 }}
              image="../asserts/anthony.jpeg"
              title="green iguana"
            >
              <img
                src={require("../asserts/anthony.jpg")}
                width="100%"
                height="150"
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Princy
              </Typography>
            </CardContent>
            <CardActions>file
              <Button size="small">GYNOCOLOGIST</Button>
              <Button size="small">3+ EXPIERENCE</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: "345PX" }}>
            <CardMedia
              sx={{ height: 150 }}
              image="../asserts/anthony.jpeg"
              title="green iguana"
            >
              <img
                src={require("../asserts/shikaba.jpg")}
                width="100%"
                height="150"
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Shikaba
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">NEUERO SURGEION</Button>
              <Button size="small">5+ EXPIERENCE</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: "450PX" }}>
            <CardMedia
              sx={{ height: 150 }}
              image="../asserts/anthony.jpeg"
              title="green iguana"
            >
              <img
                src={require("../asserts/thomas.jpg")}
                width="100%"
                height="150"
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Thomas
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Cardiologist</Button>
              <Button size="small">15+ EXPIERENCE</Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
      {/* Footer */}
    </Box>
  );
}

export default HomePage;