import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  console.log(state)
  const guestLinks = (
    <>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </>
  );
  const authLinks = (
    <>
      <li>
        <Link to="/create/post">New Post</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
    </>
  );

  return (
    <nav>
      <div className="nav-wrapper purple lighten-1">
        <Link to={state ? `/home` : '/'} className="brand-logo left">
          Sociogram
        </Link>
        <ul id="nav-mobile" className="right">
          {state ? authLinks : guestLinks}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
