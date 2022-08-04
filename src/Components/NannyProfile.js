import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, {useState,useEffect} from "react";
import "./css/styles.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import girluser from './girluser.jpg'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import CheckIcon from '@mui/icons-material/Check';
import axios from 'axios';
import { useNavigate  } from "react-router-dom";


export default function NannyProfile() {
  const navigate=useNavigate();
  useEffect(()=>{
    axios.get('http://localhost:8080/admin/auth')
          .catch(error=>{
              if(error.message=="Request failed with status code 401"){
                  navigate('/Login')
              }
          })
    },[])

  return (
    <div className="container" style={{height:700,padding:30, width: "100%"}}>
      <div>
      <Card style={{padding:20, marginBottom:8}}>
            <div className="row">
            <div className="col-3">
            <img src={girluser} width="100" height="50" />

            </div>

          <div className="col d-flex align-items-center"> 
          <div>         
            <h2><b>Sarah Lee</b></h2>
            <h6><AlternateEmailIcon style={{marginRight:10}}/>sarah224@gmail.com</h6>
            <p ><StarIcon sx={{ color: "#ff9900"}}/> 
            <StarIcon sx={{ color: "#ff9900"}}/> 
            <StarIcon sx={{ color: "#ff9900"}}/> 
            <StarIcon sx={{ color: "#ff9900"}}/> 
            <StarIcon sx={{ color: "#ff9900"}}/> </p>
            <Button
        variant="contained"
        style={{backgroundColor:"#000", color:"#fff", marginTop: 10}}
        size="small"

        //   onClick={}
      >
        Edit Profile
      </Button>
            </div>
          </div>
          </div>
          </Card>
          <Card style={{ padding:30, marginBottom:8}}>
            <div className="row">
            <div className="col-8">
            <h6><LocalPhoneIcon  style={{marginRight:10}}/> +1-202-555-0183</h6>
            <h6><PersonIcon style={{marginRight:10}}/>Female</h6>
            <h6><CalendarMonthIcon style={{marginRight:10}}/>16-04-2000</h6>
            <h6><LocationOnIcon style={{marginRight:10}}/>Address: 45 Berkshire Avenue Revere</h6>
            </div>
            <div className="col d-flex justify-content-center" 
             style={{marginRight:100, borderRadius:"500px",padding:20,backgroundColor:"#000", color:"#fff", textAlign:"center"}}>
              <div>
              <h6>Price Rate per Hour</h6>
              <h2>$300</h2>
              </div>

            </div>
            </div>

          </Card>
          <Card style={{ padding:30}}>
            <div>
            <h5>Qualifications: </h5>
            <p  style={{padding:0, margin:0}}> <CheckIcon style={{marginRight:10}}/> Bachelor in International  Relations</p>
            <p><CheckIcon style={{marginRight:10}}/>A-Levels</p>
            <h6><b>Experience: </b> Expert</h6>
            <h6><b>No. of children willing to take: </b> 3</h6>

              </div>

          </Card>

          <h3 style={{backgroundColor:"#000", color:"#fff", textAlign:"center", marginBottom:25, marginTop:30, padding:12}}> Image Gallery </h3>
          <div className="d-flex justify-content-center" >

          <img style={{marginRight:17}} src={girluser} width="200" height="100" />
          <img style={{marginRight:17}} src={girluser} width="200" height="100" />
          <img  style={{marginRight:17}} src={girluser} width="200" height="100" />
          <img  style={{marginRight:17}} src={girluser} width="200" height="100" />
            </div>

          


      </div>
    </div>
  );
}
