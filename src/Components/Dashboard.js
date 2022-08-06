import React,{useEffect} from "react";
import axios from 'axios';
import { useNavigate  } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
export default function Dashboard() {
  const navigate=useNavigate();
  useEffect(()=>{
    axios.get('https://nannyapp-server.herokuapp.com/admin/auth')
          .catch(error=>{
              if(error.message=="Request failed with status code 401"){
                  navigate('/Login')
              }
          })
    },[])
  return (
    <div style={{ height: 760, width: "100%", padding: 30 }}>
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    </div>
  );
}
