import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth-card">
      <div className="card">
        <h2>Sociogram</h2>
        <div className="row">
          <div className="input-field col s6">
            <input id="first_name" type="text" />
            <label for="first_name">First Name</label>
          </div>
          <div className="input-field col s6">
            <input id="last_name" type="text" />
            <label for="last_name">Last Name</label>
          </div>
        </div>
        <div className="input-field col s12">
          <input id="email" type="email" />
          <label for="email">Email</label>
        </div>
        <div className="input-field col s12">
          <input id="password" type="password" />
          <label for="password">Password</label>
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Sign up
          <i className="material-icons right">send</i>
        </button>
      </div>
      <div className="row card">
        <h6>
          Don't have an account? <Link to="/login"> Login </Link>
        </h6>
      </div>
    </div>
  );
};

export default Register;

/* 
  <div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Card Title</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
*/
