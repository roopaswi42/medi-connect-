import {
    Box,
    Button,
    Dialog,
    TextField,
    Typography,
    Divider,
  } from "@mui/material";
  import CloseIcon from "@mui/icons-material/Close";
  import { useEffect, useState } from "react";
  import Calendar from "react-calendar";
  import "react-calendar/dist/Calendar.css";
  import { useLocation } from "react-router-dom";
  import swal from "sweetalert";
  import axios from "axios";
  function Appointment() {
    useEffect(() => {}, []);
    const { state } = useLocation();
    console.log("datata", state);
    const [data, setData] = useState(state);
    const [value, onChange] = useState(new Date());
    const [openForm, setOpenForm] = useState(false);
    const [patient,setPatient]=useState("")
    const [age,setAge]=useState("")
    const [phonenum,setPhnum]=useState()
  
    const disableDates = new Date("April 04, 2023 23:15:30");
    const date1 = disableDates.getDate();
    const bookapp = () =>{
      axios.post("http://localhost:5000/hospital/bookAppointment",{
        "username":"Nagarjuna",
        "PatientName":patient,
        "doctor":"Thomas",
        "age":age,
        "email":"nag.com",
        "phoneNumber":phonenum,
        "date":value,
        "reason":"fever"
    }).then((res)=>console.log(res)).catch((err)=>console.log(err))
    }
    const handleday = (e) => {
      setOpenForm(true);
      console.log(e);
    };
    let dates = [new Date(2023, 4, 4), new Date(2017, 4, 5)];
    return (
      <Box sx={{ marginTop: "70px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // border: "2px solid red",
            height: "80vh",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginBottom: "30px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: "20px",
                }}
              >
                <Typography>Doctor : </Typography>
                <span
                  style={{
                    backgroundColor: "green",
                    padding: "5px",
                    color: "white",
                    marginLeft: "5px",
                    borderRadius: "10px",
                  }}
                >
                  {data.name}
                </span>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography>Specialist : </Typography>
                <span
                  style={{
                    backgroundColor: "blue",
                    padding: "5px",
                    color: "white",
                    marginLeft: "5px",
                    borderRadius: "10px",
                  }}
                >
                  {data.specialist}
                </span>
              </Box>
            </Box>
  
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Calendar
                onChange={onChange}
                value={value}
                onClickDay={handleday}
                tileDisabled={({ date }) => date.getDate() === date1}
              />
            </Box>
            {openForm ? (
              <Dialog
                fullWidth
                open={openForm}
                onClose={() => setOpenForm(false)}
              >
                <Box
                  sx={{
                    margin: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "10px",
                    marginRight: "24px",
                    marginLeft: "24px",
                  }}
                >
                  <Typography variant="h6">Book Appointement</Typography>
                  <Button onClick={() => setOpenForm(false)}>
                    <CloseIcon />
                  </Button>
                </Box>
                <Divider />
  
                <Box>
                  <Box sx={{ padding: "10px" }}>
                    <Box sx={{ marginBottom: "10px" }}>
                      <TextField
                        sx={{ width: "264px" }}
                        size="small"
                        variant="outlined"
                        id="Your Name"
                        name="patient_name"
                        label="Patient Name"
                        
                        onChange={(e)=>setPatient(e.target.value)}
                        required
                      />
                    </Box>
                    <Box sx={{ marginBottom: "10px" }}>
                      <TextField
                        sx={{ width: "264px" }}
                        variant="outlined"
                        id="Age"
                        name="Age"
                        label="Age"
                        onChange={(e)=>setAge(e.target.value)}
                        size="small"
                        required
                      />
                    </Box>
                    <Box
                      sx={{
                        marginBottom: "10px",
                      }}
                    >
                      <TextField
                        sx={{ width: "264px" }}
                        variant="outlined"
                        id="PHONE NUMBER"
                        name="email"
                        label="Email    "
                        onChange={(e)=>setPhnum(e.target.value)}
                        size="small"
                        required
                      />
                    </Box>
                    <Box
                      sx={{
                        marginRight: "15px",
                        marginBottom: "25px",
                        width: "270px",
                      }}
                    >
                      <TextField
                        sx={{ width: "264px" }}
                        variant="outlined"
                        id="PHONE NUMBER"
                        name="PHONE NUMBER"
                        label="Phone Number    "
                        // value={formik.values.driverNumber}
                        // onChange={formik.handleChange}
                        size="small"
                        required
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "end",
                      }}
                    >
                      <Button
                        type="submit"
                        color="primary"
                        onClick={() => {
                          setOpenForm(false);
                          bookapp()
                          swal(
                            "success",
                            "Doctor Appointment Confirmed",
                            "success"
                          );
                        }}
                      >
                        BOOK APPOINTMENT
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Dialog>
            ) : null}
          </Box>
        </Box>
      </Box>
    );
  }
  
  export default Appointment;