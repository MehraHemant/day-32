import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
const Portal = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="App">
      <Navbar sidebar={sidebar} setSidebar={setSidebar} />
      <div>
        <div className="row w-100">
          <div className={`col-md-2 paper  ${sidebar ? "hide" : ""} `}>
            <SideBar sidebar={sidebar} setSidebar={setSidebar} />
          </div>
          <div className={`${sidebar ? "col-md-12" : "col-md-10"}`}>
            <div
              className="container-fluid py-4"
              style={{ minHeight: "700px" }}
            >
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portal;
