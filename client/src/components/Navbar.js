import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
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
        {  state && <Link to={`/profile/${state._id}`}>Profile</Link>}
      </li>
      <li>
        <a href="#" onClick={() => {
          localStorage.removeItem('jwtSocio')
          dispatch({ type: 'LOGOUT' })
        }} style={{ cursor: 'pointer' }}>Logout</a>
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
