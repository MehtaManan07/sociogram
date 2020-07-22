import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
    <div class="nav-wrapper purple lighten-1">
      <Link to="/" class="brand-logo">Sociogram</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
    </nav>
  );
};

export default Navbar;
