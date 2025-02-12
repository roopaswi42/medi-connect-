import { createHashRouter } from "react-router-dom";
import HomePage from "../HospitalHomePage/HomePage";
import Login from "../Login/Login";
import Appointment from "../Screens/Appointment";
import DoctorsList from "../Screens/DoctorsList";
import MainLayout from "../Screens/MainLayout";
import OptionsScreen from "../Screens/Options";
import Profile from "../Screens/Profile";
import UserSelection from "../Login/userSelection";
import AppointmentsCheck from "../Screens/AppointmentsCheck";
import SignUp from "../Login/SignUp";
import PatientDetail from "../Screens/PatientDetails";

const router = createHashRouter([
  {
    path: "/",
    element: <UserSelection />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/main",
    element: <MainLayout />,
    children: [
      {
        path: "/main/",
        element: <HomePage />,
      },
      {
        path: "/main/profile",
        element: <Profile />,
      },
      {
        path: "/main/doctors",
        element: <DoctorsList />,
      },
      {
        path: "/main/appointment",
        element: <Appointment />,
      },
      {
        path: "/main/medicalStaff",
        element: <OptionsScreen />,
      },
      {
        path: "/main/patientDetail",
        element: <PatientDetail />,
      },
      {
        path: "/main/AppointmentAck",
        element: <AppointmentsCheck />,
      },
    ],
  },
]);

export default router;