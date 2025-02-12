import { Avatar, Box, Button, TextField, Typography,IconButton,Icon } from "@mui/material";
import { useState } from "react";
import {MedicalDoctorData} from './MedicalStaff';
//import SearchIcon from '@mui/icons-material/Search';
import ToggleOffTwoToneIcon from '@mui/icons-material/ToggleOffTwoTone';
import ToggleOnTwoToneIcon from '@mui/icons-material/ToggleOnTwoTone';
import { useNavigate } from "react-router-dom";


function OptionsScreen() {
    const nav = useNavigate()
    const [doctordata,setDoctorData]=useState(MedicalDoctorData);
    const [searchResult,setSearchResult]=useState(MedicalDoctorData)
    const handleSearch = (e) =>{
        let result = doctordata.filter((key,index)=>{
            if(key.name.toLowerCase().includes(e.target.value.toLowerCase()) || key.specialist.toLowerCase().includes(e.target.value.toLowerCase())){
                return key
            }
           
        })
        
        setSearchResult(result)
       console.log(result)
    }
    const [toggle,setToggle]=useState(true);
  const handleTogglle = () =>{
    console.log(toggle)
    setToggle(!toggle)
    let result = doctordata.filter((key,index)=>{
        if(toggle===true)
        {
           if(key.avialable===true){
            return key
           }
        }
    })
    if(toggle==false){
        setSearchResult(doctordata)
    }
    else{
    setSearchResult(result)
    }
  }
    return ( 
        <Box sx={{marginTop:'70px'}}>
            {/* <Box sx={{display:'flex',flexDirection:'row'}}>
                <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',width:'100%',marginBottom:'10px',alignItems:'center'}}>
            <TextField variant="outlined" label="Search Doctor" onChange={handleSearch}  sx={{width:'80%'}} right={<SearchIcon/>} size="small"/>
            {
            toggle? 
                <Icon  aria-label="menu" fontSize="large" onClick={handleTogglle}>
                        < ToggleOffTwoToneIcon />
                </Icon>
                :
                <Icon  aria-label="menu" fontSize="large" onClick={handleTogglle}>
                         < ToggleOnTwoToneIcon />
                </Icon>
            }
            </Box>
            </Box> */}
            <Box sx={{display:'flex',flexDirection:'row',}}>
                <TextField variant="outlined" label="Search Doctor" size="small" 
                sx={{width:'80%',marginLeft:'75px',marginBottom:'10px'}} 
                onChange={handleSearch}
                />
                {
            toggle? 
                <Icon  aria-label="menu" fontSize="large" onClick={handleTogglle}>
                        < ToggleOffTwoToneIcon />
                </Icon>
                :
                <Icon  aria-label="menu" fontSize="large" onClick={handleTogglle}>
                         < ToggleOnTwoToneIcon />
                </Icon>
            }
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
            <Box sx={{width:'90%'}}>
            
                {searchResult.map((data,index)=>(   
                      
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
                      <Typography sx={{color:'whitesmoke',textAlign:'left'}}>{data.name}</Typography>
                      </Box>
                      <Box>
                      <Typography sx={{textAlign:'left'}}>{data.specialist}</Typography>
                      </Box>
                      <Box>
                      <Typography>5+ Years Experience </Typography>
                      </Box>
                      {data.avialable?
                      <Button color="inherit" sx={{color:'black'}} variant="contained"  onClick={()=>nav(data.route,{"state":data})}>BOOK APPOINTMENT</Button>:
                      <Button color="inherit" disabled sx={{color:'black'}} variant="contained">NOT AVIALABLE</Button>}
                  </Box>
                  
                ))}
                </Box>
            </Box>
        </Box>  
     );
}

export default OptionsScreen;