import React,{useState} from "react";
import "./css/styles.css";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import Card from '@mui/material/Card';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function Login(){
    const [strEmail,setEmail]=useState('');
    const [strPassword,setPassword]=useState('');
    const navigate = useNavigate();
  
    
    const clickfun= ()=>{
        axios.post('https://nany-app-server.herokuapp.com/admin/login', {
            password:strPassword,email:strEmail
          }).then(function (response){
            console.log("response",response)
            navigate('/Dashboard')
          })
          .catch(error=>{
            console.log(error)
          })
    }

    return(
        <div className="container d-flex justify-content-center ">
            <div style={{width:700}}>

                    <Card style={{padding:30}} >
            <TextField className="my-4" fullWidth id="outlined-basic" label="Email" variant="outlined" value={strEmail} onChange={(e) => setEmail(e.target.value)} />
            <TextField className="my-4" fullWidth id="outlined-basic" label="Password" variant="outlined" value={strPassword} onChange={(e) => setPassword(e.target.value)} />
            <Button
            style={{backgroundColor:"#000", color:"#fff"}}
            className="my-4 "
        variant="contained"

        size="small"

           onClick={()=>clickfun()}
      >
       Login
      </Button>
      </Card>


                </div>



        </div>
    )
}