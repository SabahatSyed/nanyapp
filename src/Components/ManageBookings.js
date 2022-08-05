import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, {useState,useEffect} from "react";
import "./css/styles.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
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
    field: "NannyName",
    headerName: "Nanny Name",
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

const rows = [
  { id: 1, ParentName: 'Snow', NannyName: 'Jon'},
  { id: 2, ParentName: 'Snow', NannyName: 'Jon'},



];

function ActionButton() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button
        variant="contained"
        style={{backgroundColor:"#000", color:"#fff", marginLeft: 16}}
        size="small"
        // onClick={setOpen(true)}
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
          <h2>Name: NANNY CO</h2>

        </Box>
      </Modal>

      <Button
        variant="contained"
        style={{backgroundColor:"#000", color:"#fff", marginLeft: 16}}
        size="small"
        //   onClick={}
      >
        Edit
      </Button>

      <Button
        variant="contained"
        style={{backgroundColor:"#000", color:"#fff", marginLeft: 16}}
        size="small"
        //   onClick={}
      >
        Cancel Booking
      </Button>
    </>
  );
}

export default function ManageBookings() {
  // const [rows, setRows] = useState([]);
  const navigate=useNavigate();
  const [bookings,setBookings]=useState({});
  const [rowws,setrowws]=useState({});
  useEffect(()=> {
        axios.get('https://nannyapp-server.herokuapp.com/admin/allbookings')
        .then(res => {
            setBookings(res.data);
            var row=[];
           bookings.map((val, id) => {
                row[id]={id: id+1, ParentName: val.parentname.parent, NannyName: val.nannyname.nanny}
          })
          console.log("uajh",row)
          setrowws(row);
        }).catch(error=>{
            if(error.message=="Request failed with status code 401"){
                navigate('/Login')
            }
        })
  })
  return (
    <div className="container" style={{height:700,padding:30, width: "100%"}}>
      <h1 style={{paddingBottom: 40, textAlign:"center"}}><b>Manage Bookings</b></h1>
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
