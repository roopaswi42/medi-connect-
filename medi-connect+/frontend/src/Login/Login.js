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
  // .max(10, "UserName Should Less Than 10 Characters"),
  pwd: Yup.string()
    .required("Password is required")
    .min(4, "Password Should Greater Than 3 Characters")
    .max(10, "Password Should Less Than 10 Characters"),
});

function Login(props) {
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
    sessionStorage.setItem("uname", values.userName);
    console.log("hihshckafkja", values);
    axios
      .post("http://localhost:5000/hospital/login", {
        username: "nag",
        password: "nag123",
      })
      .then((res) => {
        if (res.data.Message == "Failed") {
          // swal("error","Enter Valid Credentials")
          nav("/main");
        } else {
          nav("/main");
        }
      })
      .catch((err) => console.log(err));
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
        backgroundColor: "#A51C30",
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
          height: "500px",
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
            height: "500px",
          }}
        >
          <Box sx={{ paddingTop: "20px", marginBottom: 5 }}>
            <h4 className="header">Please Login To Continue</h4>
          </Box>
          <Box>
            <Formik
              initialValues={{
                userName: "",
                pwd: "",
              }}
              validationSchema={schemavalidation}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, values, handleChange }) => (
                <Form>
                  {/* <FormControl fullWidth sx={{ marginTop: 5, marginBottom: 2 }}>
                    <InputLabel id="select-Role">Role</InputLabel>
                    <Select
                      sx={{ textAlign: "left" }}
                      labelId="select-Role"
                      id="component-outlined"
                      value={Role}
                      label="Role"
                      placeholder="Select"
                      onChange={handleChanges}
                    >
                      {desg.length
                        ? desg.map((value, index) => (
                            <MenuItem value={value} key="index">
                              {value}
                            </MenuItem>
                          ))
                        : null}
                    </Select>
                  </FormControl> */}
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
                      marginBottom: 5,
                    }}
                    error={
                      Boolean(touched.userName) && Boolean(errors.userName)
                    }
                    helperText={Boolean(touched.userName) && errors.userName}
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
                    onClick={() => handleSubmit}
                    // onClick={() => nav("/main")}
                  >
                    LOGIN
                  </LoadingButton>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography className="link">
                      <a className="forgot_pw" onClick={() => nav("/signup")}>
                        Sign UP
                      </a>
                    </Typography>
                  </Box>
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

export default Login;