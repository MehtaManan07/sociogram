import React from "react";
import {Link} from 'react-router-dom'

const LoginForm = () => {
  return (
    <div className="auth-card">
      <div className="card">
        <h2>Sociogram</h2>
        <div className="input-field col s12">
          <input id="email" type="email" className="validate" />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field col s12">
          <input id="password" type="password" className="validate" />
          <label htmlFor="password">Password</label>
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
      <div className="card" style={{ padding: '2%' }}>
        <h6>
          {" "}
          Don't have an account? <Link to="/register"> Sign up </Link>{" "}
        </h6>
      </div>
    </div>
  );
};

export default LoginForm;
