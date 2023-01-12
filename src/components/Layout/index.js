import React from "react";
import "./index.scss"
import Nav from "../Nav/index";

import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div className="App">
      <div className="page"> 
      <Nav />
      <Outlet />
      </div>
    </div>
  )
}

export default Layout; 