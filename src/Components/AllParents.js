import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, {useState,useEffect} from "react";
import "./css/styles.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import userimage from './user.jpg'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import axios from 'axios';
import { useNavigate  } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
};

const columns = [
  { field: 'id', headerName: 'ID', flex:1 },
  {
    field: "ParentName",
    headerName: "Parent Name",
    flex: 1,
  },
  {
    field: "Username",
    headerName: "Username",
    flex: 1,
  },
  {
    field: "Phone",
    headerName: "Phone/Email",
    flex: 1,
  },

  {
    field: "Action",
    headerName: "Action",
    flex: 3,
    editable: false,
    renderCell: ActionButton,
  },
];


function ActionButton(row) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const id=row.row._id;
  const handleDelete = async (id) => {
    await axios.delete('http://localhost:8080/admin/deleteparent/'+id);
  };
  return (
    <>
          <Button
        variant="contained"
        style={{backgroundColor:"#000", color:"#fff", marginLeft: 16}}
        size="small"

         //onClick={handleOpen}
      >
        View Children
      </Button>
      <Button
        variant="contained"
        size="small"
        style={{backgroundColor:"#000", color:"#fff", marginLeft: 16}}
        onClick={handleOpen}
      >
        View
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card style={{padding:20, marginBottom:8}}>
            <div className="row">
            <div className="col-3">
            <img src={row.row.image} width="100" height="50" />

            </div>

          <div className="col d-flex align-items-center"> 
          <div>         
            <h2><b>{row.row.ParentName}</b></h2>
            <h6>{row.row.Username}</h6>
            </div>
          </div>
          </div>
          </Card>
          <Card style={{ padding:30}}>
            <h6><LocalPhoneIcon  style={{marginRight:10}}/>{row.row.Phone}</h6>
            <h6><PersonIcon style={{marginRight:10}}/>{row.row.gender}</h6>
            <h6><CalendarMonthIcon style={{marginRight:10}}/>{row.row.dob}</h6>
            <h6><LocationOnIcon style={{marginRight:10}}/>{row.row.address.address} , {row.row.address.city}</h6>
  </Card>
          <Button
        variant="contained"
        style={{backgroundColor:"#000", color:"#fff", marginTop: 20}}
        size="medium"

        //   onClick={}
      >
        Edit Profile
      </Button>




        </Box>
      </Modal>



      <Button
        variant="contained"
        style={{backgroundColor:"#000", color:"#fff", marginLeft: 16}}
        size="small"
        onClick={() => handleDelete(id)}
      >
        Delete
      </Button>
    </>
  );
}

export default function AllParents() {
  const navigate=useNavigate();
  const [posts,setPosts]=useState({});
  const [rowws,setrowws]=useState({});
  useEffect(()=> {
        axios.get('https://nany-app-server.herokuapp.com/admin/allparents')
        .then(res => {
            setPosts(res.data);
            var row=[];
           posts.map((val, id) => {
                row[id]={id: id+1, ParentName: val.fullname, Username: val.username, Phone:val.mobile,gender:val.gender,dob:val.dob,address:val.address,image:val.image}
          })
          setrowws(row);
        }).catch(error=>{
            if(error.message=="Request failed with status code 401"){
                navigate('/Login')
            }
        })
  })
  return (
    <div className="container" style={{height:700,padding:30, width: "100%"}}>
      <h1 style={{paddingBottom: 40, textAlign:"center"}}><b>All Parents</b></h1>
      <div>
        <DataGrid
          style={{ height: "70vh", width: "100%" }}
          columns={columns}
          rows={rowws}
          pageSize={10}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}
