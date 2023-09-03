import React from 'react';
import { Link, NavLink, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div  className="navbar">
      <h2>Dictionary App</h2>
      <NavLink id="home" to="/">Home</NavLink>
      <NavLink id="history"to="/history">History</NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default NavBar;

 {/* <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/history">History</a></li>
      </ul> */}