import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
    <div className="nav-wrapper purple lighten-1">
      <Link to="/" className="brand-logo left">Sociogram</Link>
      <ul id="nav-mobile" className="right">
        <li><Link to="/create/post">New Post</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
    </nav>
  );
};

export default Navbar;
