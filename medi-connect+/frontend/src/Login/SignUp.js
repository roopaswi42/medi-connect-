import React, { useState, useEffect, useContext } from "react";
// import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Box } from "@mui/system";
import * as Yup from "yup";
//import Paper from "@mui/material/Paper";
import {
  Alert,
  AlertTitle,
  Button,
  FormControl,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { InputAdornment, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Form, Formik, useFormik } from "formik";
import "./Login.css";
import { useLocation, useNavigate } from "react-router-dom";
// import { DesgService } from "../Services/DesgService";
// import { Endpoints } from "../Enviornment/Endpoints";

import LoadingButton from "@mui/lab/LoadingButton";
import { toast, ToastContainer } from "react-toastify";
import swal from "sweetalert";
// import 'react-toastify/dist/ReactToastify.css';

const schemavalidation = Yup.object().shape({
  userName: Yup.string()
    .required("UserName is required")
    .min(3, "UserName Should Greater Than 3 Characters"),
    name: Yup.string()
    .required("UserName is required")
    .min(3, "Name Should Greater Than 3 Characters"),
    age: Yup.number()
    .required("age is required"),
  bloodgroup: Yup.string()
  .required("Bloodgroup is required")
  .min(1, "UserName Should Greater Than 3 Characters"),
city: Yup.string()
.required("city is required")
.min(3, "city name Should Greater Than 3 Characters"),
usertype: Yup.string()
.required("usertype is required")
,
  // .max(10, "UserName Should Less Than 10 Characters"),
  pwd: Yup.string()
    .required("Password is required")
    .min(4, "Password Should Greater Than 3 Characters")
    .max(10, "Password Should Less Than 10 Characters"),
});

function SignUp(props) {
 
  const nav = useNavigate();
  const [loader, setLoader] = useState(false);
  const { state } = useLocation();
  sessionStorage.setItem("role", state);
  console.log(state);
  const [Role, setRole] = React.useState("");
  const [showpwd, SetShowpwd] = useState(false);
  const [isSuccess, SetIsSuccess] = useState(false);
  // const navigate = useNavigate();
  // const desgService = new DesgService();
  const [desg, setDesg] = useState([state]);
  useEffect(() => {
    // if (sessionStorage.getItem("token")) {
    //   navigate("/");
    // }
    console.log("renderssss");
  }, []);

  const handleSubmit = (values) => {
    console.log(values,"Charishma")
    sessionStorage.setItem("age", values.age);
    sessionStorage.setItem("city", values.city);
    sessionStorage.setItem("bloodgroup", values.bloodgroup);
    console.log("hihshckafkja")
    axios.post("http://localhost:5000/hospital/signUp",
    {
        username: "robert",
        password: "nag123",
        usertype: "Doctor",
        name: "Robert",
        age: "23",
        dateofbirth: "9-2-1990",
        bloodgroup: "B+",
        city: "texas"
      }
  ).then((res)=>{
    nav('/login')
    console.log(res)
    swal("success","user has been registered")
  }).catch((err)=>console.log(err))
  };
  const handleChanges = (event) => {
    console.log(event.target.value);
    setRole(event.target.value);
  };
  const handlepwd = () => SetShowpwd(!showpwd);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        felx: 1,
        backgroundColor: "blueviolet",
        height: "100vh",
      }}
    >
      <Box>
        <img
          src={
            state == "Doctor"
              ? require("../asserts/doctor_pic.jpg")
              : require("../asserts/doctor_scope.jpg")
          }
          className="images"
          alt="heroNode"
        />
      </Box>

      <Box
        sx={{
          bgcolor: "white",
          width: "360px",
          height: "700px",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            bgcolor: "white",
            width: "320px",
            height: "700px",
          }}
        >
          <Box sx={{ paddingTop: "20px" }}>
            <h4 className="header">Please Login To Continue</h4>
          </Box>
          <Box>
            <Formik
              initialValues={{
                userName: "",
                pwd: "",
                name:'',
                age:'',
                city:'',
                bloodgroup:'',
                usertype:'Doctor',
                dateofbirth:'12/02/1979'

              }}
              validationSchema={schemavalidation}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, values, handleChange }) => (
                <Form>
                 
                  <TextField
                    name="userName"
                    value={values.userName}
                    onChange={handleChange}
                    id="component-outlined"
                    label="UserName"
                    placeholder="UserName"
                    type="text"
                    sx={{
                      width: "100%",
                      marginBottom: 2,
                    }}
                    error={
                      Boolean(touched.userName) && Boolean(errors.userName)
                    }
                    helperText={Boolean(touched.userName) && errors.userName}
                  />
                   <TextField
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    id="component-outlined"
                    label="name"
                    placeholder="name"
                    type="text"
                    sx={{
                      width: "100%",
                      marginBottom: 2,
                    }}
                    error={
                      Boolean(touched.name) && Boolean(errors.name)
                    }
                    helperText={Boolean(touched.name) && errors.name}
                  />
                   <TextField
                    name="age"
                    value={values.age}
                    onChange={handleChange}
                    id="component-outlined"
                    label="age"
                    placeholder="age"
                    type="text"
                    sx={{
                      width: "100%",
                      marginBottom: 2,
                    }}
                    error={
                      Boolean(touched.age) && Boolean(errors.age)
                    }
                    helperText={Boolean(touched.age) && errors.age}
                  />
                   <TextField
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    id="component-outlined"
                    label="city"
                    placeholder="city"
                    type="text"
                    sx={{
                      width: "100%",
                      marginBottom: 2,
                    }}
                    error={
                      Boolean(touched.city) && Boolean(errors.city)
                    }
                    helperText={Boolean(touched.city) && errors.city}
                  />
                   <TextField
                    name="bloodgroup"
                    value={values.bloodgroup}
                    onChange={handleChange}
                    id="component-outlined"
                    label="bloodgroup"
                    placeholder="bloodgroup"
                    type="text"
                    sx={{
                      width: "100%",
                      marginBottom: 2,
                    }}
                    error={
                      Boolean(touched.bloodgroup) && Boolean(errors.bloodgroup)
                    }
                    helperText={Boolean(touched.bloodgroup) && errors.bloodgroup}
                  />
                  <TextField
                    name="pwd"
                    value={values.pwd}
                    onChange={handleChange}
                    error={Boolean(touched.pwd) && Boolean(errors.pwd)}
                    helperText={Boolean(touched.pwd) && errors.pwd}
                    id="component-outlined"
                    label="Password"
                    type={showpwd ? "text" : "password"}
                    placeholder="Password"
                    sx={{
                      width: "100%",
                      marginBottom: 2,
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password Visibility"
                            onClick={handlepwd}
                          >
                            {showpwd ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <LoadingButton
                    loading={loader}
                    variant="contained"
                    type="submit"
                    sx={{
                      width: "100%",
                      p: 1.2,
                      mt: 3,
                      marginBottom: 5,
                      fontWeight: 500,
                    }}
                    className="submitbtn"
                    onClick={()=>handleSubmit}
                    // onClick={() => nav("/main")}
                  >
                    SIGN UP
                  </LoadingButton>
                  {/* <Box sx={{ textAlign: "center" }}>
                    <Typography className="link">
                      <a className="forgot_pw">Forgot Your Password?</a>
                    </Typography>
                  </Box> */}
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Box>

      <ToastContainer />
    </Box>
  );
}

export default SignUp;