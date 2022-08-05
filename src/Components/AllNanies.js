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
import axios from 'axios';
import { useNavigate  } from "react-router-dom";
import { getRowIdFromRowModel } from "@mui/x-data-grid/hooks/features/rows/gridRowsUtils";
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
    field: "NannyName",
    headerName: "Nanny Name",
    flex: 1,
  },
  {
    field: "Email",
    headerName: "Email",
    flex: 1,
  },
  {
    field: "Phone",
    headerName: "Phone",
    flex: 1,
  },
  {
    field: "Gender",
    headerName: "Gender",
    flex: 1,
  },
  {
    field: "Action",
    headerName: "Action",
    flex: 2,
    editable: false,
    renderCell: ActionButton,
  },
];






function ActionButton(row) {
  const [open, setOpen] = useState(false);
  const id=row.row._id;
  const handleOpen = () =>setOpen(true);
  const handleClose = () =>setOpen(false);

  const handleDelete = async (id) => {
    await axios.delete('http://localhost:8080/admin/deletenanny/'+id);
  };
  return (
    <>
    
      
      <Button
        variant="contained"
        style={{backgroundColor:"#000", color:"#fff", marginLeft: 16}}
        size="small"
        onClick={
          handleOpen}
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
            <h2><b>{row.row.NannyName}</b></h2>
            <h6><AlternateEmailIcon style={{marginRight:10}}/>{row.row.Email}</h6>
            </div>
          </div>
          </div>
          </Card>
          <Card style={{ padding:30}}>
            <h6><LocalPhoneIcon  style={{marginRight:10}}/>{row.row.Phone}</h6>
            <h6><PersonIcon style={{marginRight:10}}/>{row.row.Gender}</h6>
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

export default function AllNanies() {
  const [posts,setPosts]=useState([]);
const [rowws,setrowws]=useState([]);
  const navigate=useNavigate();

  useEffect(()=>{
  axios.get('https://nannyapp-server.herokuapp.com/admin/allnannies')
        .then(res => {
            setPosts(res.data);
            console.log("res.data",res)
            var row=[];
            res.data.map((val, id) => {
                row[id]={id: id+1, NannyName: val.data.fullname, Email: val.data.email, Phone:val.data.mobile, Gender:val.data.gender,dob:val.data.dob,address:val.data.address,image:val.data.image,_id:val.id}
          })
          setrowws(row);
        }).catch(error=>{
            if(error.message=="Request failed with status code 401"){
                navigate('/Login')
            }
        })
  },[])
  
  return (
    <div className="container" style={{height:700,padding:30, width: "100%"}}>
      <h1 style={{paddingBottom: 40, textAlign:"center"}}><b>All Nanies</b></h1>
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
