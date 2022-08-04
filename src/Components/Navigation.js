import React from "react";
import "./css/styles.css";
import { Link, Outlet } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import LogoutIcon from '@mui/icons-material/Logout';
// import axios from "axios";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();
    // const auth = getAuth(app);
    const logout=()=>{
      console.log("helllo")
        axios.get('https://nannyapp-server.herokuapp.com/admin/logout')
            .then(res => {

                console.log("sca",res)
                navigate('/Login')

            })

    }
  return (
    <React.Fragment>

      <div id="layoutSidenav" style={{height:1000}}>
        <div id="layoutSidenav_nav">
          <nav class="sb-sidenav accordion bg" id="sidenavAccordion">
            <div
            //   style={{
            //     height: "calc(100vh - 56px)",
            //     overflow: "auto",
            //   }}
              class="sb-sidenav-menu"
              style={{backgroundColor:"#000"}}>
              <div class="nav">
                <div class="sb-sidenav-menu-heading" style={{color:"#fff", fontSize:30, paddingBottom:30}}>ADMIN</div>

                
                <Link class="nav-link sidenavtext " to="Login">
                  <div class="sb-nav-link-icon">

                  </div>
                  Login
                </Link>

                <Link class="nav-link sidenavtext " to="Dashboard">
                  <div class="sb-nav-link-icon">

                  </div>
                  <HomeIcon style={{marginRight:15}}/>
                  Dashboard
                </Link>
                <Link class="nav-link sidenavtext " to="AllParents">
                  <div class="sb-nav-link-icon">

                  </div>
                  <FamilyRestroomIcon style={{marginRight:15}}/>
                  All Parents
                </Link>
                <Link class="nav-link sidenavtext " to="AllNanies">
                  <div class="sb-nav-link-icon">

                  </div>
                  <ChildCareIcon style={{marginRight:15}}/>
                  All Nanies
                </Link>
                <Link class="nav-link sidenavtext " to="NannyProfile">
                  <div class="sb-nav-link-icon">

                  </div>
                  <ChildCareIcon style={{marginRight:15}}/>
                  Nanny Profile
                </Link>
                <Link class="nav-link sidenavtext " to="ManageBookings">
                  <div class="sb-nav-link-icon">

                  </div>
                  <CheckBoxIcon style={{marginRight:15}}/>
                  Manage Bookings
                </Link>
                <Link class="nav-link sidenavtext " to="ManageMemberships">
                  <div class="sb-nav-link-icon">

                  </div>
                  <CalendarMonthIcon style={{marginRight:15}}/>
                  Manage Memberships
                </Link>
                <Link class="nav-link sidenavtext " onClick={()=>logout()}>
                  <div class="sb-nav-link-icon">

                  </div>
                  <LogoutIcon style={{marginRight:15}} />
                  Logout
                </Link>
              </div>

            </div>
          </nav>
        </div>
        <div
          style={{
            width: "100%",

          }}
        >
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  );
}
