import React,{useEffect} from "react";
import axios from 'axios';
import { useNavigate  } from "react-router-dom";
export default function Dashboard() {
  const navigate=useNavigate();
  useEffect(()=>{
    axios.get('https://nany-app-server.herokuapp.com/admin/auth')
          .catch(error=>{
              if(error.message=="Request failed with status code 401"){
                  navigate('/Login')
              }
          })
    },[])
  return (
    <div style={{ height: 760, width: "100%", padding: 30 }}>
    <h1>Evaluator Dashboard</h1>
    <p>Evalutorsa wqkejnwkkjasdjkasjkdnasdkjask</p>      
    </div>
  );
}
