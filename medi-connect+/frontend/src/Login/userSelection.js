import { Box, Button, Typography } from "@mui/material";
import "./userSelection.css";
import { useNavigate } from "react-router-dom";
import logo from '../asserts/main1.mp4';
import { Container, Row, Col } from 'react-bootstrap';


function UserSelection() {
  const nav = useNavigate();
  return (
    <Box className="mainContainer">
     
    
    <div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <div className="Topbar">
                <Container className="">
                    <Row className="mt-1">
                        <Col sm={9}>
                            
                        </Col>
                        <Col sm={2}>
                        <Box className="BtnContainer">
          <Button
            title="Patient"
            variant="contained"
            onClick={() => nav("/login", { state: "Patient" })}
          >
            Patient
          </Button>
          <Button
            title="Doctor"
            variant="contained"
            onClick={() => nav("/login", { state: "Doctor" })}
          >
           Medical assistant
          </Button>
        </Box>
                            
                                
                            
                                
                        </Col>
                    </Row>
                </Container>

            </div>
            <div className="head-text">
    <div className="head-image">
        <center><h1 style={{fontSize:"50px", color:"red"}}>MEDI CONNECT+</h1></center>
        <video src={logo} loop="" autoplay="True"  muted="" width={1500} height={900}></video>   
    </div>
      
      </div></div>
    </Box>
  );
}

export default UserSelection;