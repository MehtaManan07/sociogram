import React from "react";
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className="auth-card">
      <div className="card">
        <h2>Sociogram</h2>
        <div className="input-field col s12">
          <input id="email" type="email" className="validate" />
          <label for="email">Email</label>
        </div>
        <div className="input-field col s12">
          <input id="password" type="password" className="validate" />
          <label for="password">Password</label>
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Login
          <i className="material-icons right">send</i>
        </button>
      </div>
      <div className="row card">
       <h6> Don't have an account? <Link to="/register"> Sign up </Link> </h6> 
      </div>
    </div>
  );
};

export default Login;

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
