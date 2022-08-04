import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation"
import Dashboard from "./Components/Dashboard"
import ManageBookings from "./Components/ManageBookings"
import AllNanies from "./Components/AllNanies"
import ManageMemberships from "./Components/ManageMemberships"
import AllParents from "./Components/AllParents"
import NannyProfile from "./Components/NannyProfile"
import Login from "./Components/Login"
import "bootstrap/dist/css/bootstrap.min.css";

export default function NannyRoutes() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Navigation />}>
      <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/AllNanies" element={<AllNanies />} />
        <Route path="/AllParents" element={<AllParents />} />
        <Route path="/ManageBookings" element={<ManageBookings />} />
        <Route path="/ManageMemberships" element={<ManageMemberships />} />
        <Route path="/NannyProfile" element={<NannyProfile />} />
      </Route>
    </Routes>
    </Router>
  );
}


