import { Avatar, Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function AcceptedAppointment () {
    const [ackList,setAckList]=useState([])
    useEffect(()=>{
        confrimapp()
    },[]);
    

    const confrimapp = (data) => {
        console.log("confirmmmm.....")
        axios.post("http://localhost:5000/hospital/getacceptedAppointmentList",{
            "doctor":"Thomas"
        }).then((res)=>console.log(setAckList(res.data))).catch((err)=>console.log(err))
        
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
                     
                  </Box>
                  
                ))}
                </Box>
            </Box>
            :null}
        </Box>
    )
}