import React from "react";
import "../index.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
const Navbar = ({ sidebar, setSidebar }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="main d-flex">
          <button
            onClick={() => {
              setSidebar(!sidebar);
            }}
            className="btn btn-dark"
          >
            <MenuIcon />
          </button>
          <Link className="navbar-brand" to="/">
            Library System
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// fixed-top
