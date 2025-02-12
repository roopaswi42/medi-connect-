import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
//import ListItemText from '@mui/material/ListItemText';
//import ListItem from '@mui/material/ListItem';
//import List from '@mui/material/List';
//import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Box } from '@mui/material';
import './Detailsscreen.css'
//import axios from 'axios';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DetailsOfVisitScreen(props) {
  const [open, setOpen] = React.useState(props.onOpen);
  
console.log(props)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    props.onClose();
    setOpen(false);
  };

 

  return (
    <div>  
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
             Reason :Fever 
            </Typography>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
             Patient :Charishma  
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              CLOSE
            </Button>
          </Toolbar>
        </AppBar>
       <Box>
        <Box className="visitedDetails" >
            <Box sx={{ backgroundColor: "antiquewhite"}}>
                <Typography sx={{color:'green',fontWeight:'bold',letterSpacing:2,fontSize:'18px',padding:'10px'}}>
                    VISTIED DETAILS
                </Typography>
                <Box className="visitHistory">
                    <Box className="Reason">
                        <Typography>Reason :</Typography>
                        <Typography>fever</Typography>
                    </Box>
                    <Box className="Consulted_doctor">
                        <Typography>Doctor :</Typography>
                        <Typography>Thomas Agnes</Typography>
                    </Box>
                    <Box className="appt_date">
                        <Typography>Date :</Typography>
                        <Typography>10-03-2023</Typography>
                    </Box>
                    {/* <Button color="primary" onClick={()=>SetOpenHist(true)}>View History</Button> */}
                </Box>
            </Box>
            <Box sx={{backgroundColor:'whitesmoke'}}>
                <Typography sx={{color:'black,',fontWeight:'bold',letterSpacing:2,fontSize:'18px',padding:'10px'}}>
                    PRESCRIPTION
                </Typography>
                <Box className="prescription_detail">
                    <Typography>Predscrption-10045</Typography>
                    <Button color="inherit" variant="contained">View</Button>
                </Box>
                <Box className="prescription_detail">
                    <Typography>Predscrption-10046</Typography>
                    <Button color="inherit" variant="contained">View</Button>
                </Box>
                <Box className="prescription_detail">
                    <Typography>Predscrption-10047</Typography>
                    <Button color="inherit" variant="contained">View</Button>
                </Box>
                <Box className="prescription_detail">
                    <Typography>Predscrption-10049</Typography>
                    <Button color="inherit" variant="contained">View</Button>
                </Box>
            </Box>

            <Box sx={{backgroundColor:'grey'}}>
                <Typography sx={{color:'white',fontWeight:'bold',letterSpacing:2,fontSize:'18px',padding:'10px'}}>
                    LAB REPORTS
                </Typography>
                <Box className="prescription_detail">
                    <Typography>Report-19889</Typography>
                    <Button color="inherit" variant="contained">View</Button>
                </Box>
                <Box className="prescription_detail">
                    <Typography>Report-19845</Typography>
                    <Button color="inherit" variant="contained">View</Button>
                </Box>
                <Box className="prescription_detail">
                    <Typography>Report-19812</Typography>
                    <Button color="inherit" variant="contained">View</Button>
                </Box>
                <Box className="prescription_detail">
                    <Typography>Report-19865</Typography>
                    <Button color="inherit" variant="contained">View</Button>
                </Box>
            </Box>
            <Box>
                <Typography sx={{color:'red',fontWeight:'bold',letterSpacing:2,fontSize:'18px',padding:'10px'}}>
                    PAYMENTS
                </Typography>
                <Box className="prescription_detail">
                    <Typography>Report# :878122</Typography>
                    <Button color="inherit" variant="contained">View</Button>
                </Box>
                <Box className="prescription_detail">
                    <Typography>Report# :19910</Typography>
                    <Button color="inherit" variant="contained">View</Button>
                </Box>
                <Box className="prescription_detail">
                    <Typography>Report# :19823</Typography>
                    <Button color="inherit" variant="contained">View</Button>
                </Box>
                <Box className="prescription_detail">
                    <Typography>Report# :70878</Typography>
                    <Button color="inherit" variant="contained">View</Button>
                </Box>
            </Box>
        </Box>
       </Box>
      </Dialog>
    </div>
  );
}