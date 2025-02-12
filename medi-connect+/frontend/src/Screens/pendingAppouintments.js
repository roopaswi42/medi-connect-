import { Avatar, Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PendingAppouintments () {
    const nav = useNavigate();
    const [ackList,setAckList]=useState([])
    const [history,setHistory]=useState([])
    useEffect(()=>{
        getList();
        getViewHistory();
    },[]);
    const getList = () =>{
        axios.post("http://localhost:5000/hospital/getpendingAppointmentList",{
            "doctor":"Thomas"
        }).then((res)=>{setAckList(res.data);console.log(res)}).catch((err)=>console.log(err))
    }
    const getViewHistory = (data) => {
        console.log("confirmmmm.....")
        axios.post("http://localhost:5000/hospital/getViewHistory",{
            "username":"Charishma"
        }).then((res)=>setHistory(res.data)).catch((err)=>console.log(err))
        
    }

    const confrimapp = (data) => {
        console.log("confirmmmm.....")
        axios.post("http://localhost:5000/hospital/acceptrejectAppointmentList",{
            "username":"Charishma",
            "PatientName":data.PatientName,
            "doctor":data.doctor,
            "age":data.age,
            "email":data.email,
            "phoneNumber":data.phoneNumber,
            "date":data.date,
            "reason":data.reason,
            "status":"ACCEPTED"
        }).then((res)=>console.log(res)).catch((err)=>console.log(err))
        getList()
    }
    return (
        <Box>
            {ackList.length>0?
              <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
            <Box sx={{width:'90%'}}>
                {ackList.map((data,index)=>(   
                      
                      <Box key={index} sx={{
                        display:'flex',
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'space-around',
                        backgroundColor:'blueviolet',
                        padding:'10px',
                        width:'90%',
                        marginBottom:'10px'
                        
                        }}>
                      <Avatar>RG</Avatar>
                      <Box>
                      <Typography sx={{color:'whitesmoke',textAlign:'left'}}>{data.PatientName}</Typography>
                      </Box>
                      <Box>
                      <Typography sx={{textAlign:'left'}}>{data.reason}</Typography>
                      </Box>
                      <Box>
                      <Typography sx={{textAlign:'left'}}>{data.date.split('T')[0]}</Typography>
                      </Box>
                      <Button color="inherit" sx={{color:'black'}} variant="contained" onClick={()=>confrimapp(data)}>CONFIRM APPOINTMENT</Button>
                      <Button color="inherit" sx={{color:'black'}} variant="contained" onClick={()=>nav('/main/patientDetail')}>PATIENT DETAILS   </Button>
                  </Box>
                  
                ))}
                </Box>
            </Box>
            :null}
        </Box>
    )
}