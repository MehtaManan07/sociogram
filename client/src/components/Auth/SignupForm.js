import React from "react";
import { Link } from "react-router-dom";

const SignupForm = ({ values, onSubmitHandler, onChangeHandler }) => {
  return (
    <div className="auth-card">
      <div className="card">
        <h2>Sociogram</h2>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="first_name"
              type="text"
              value={values.name}
              onChange={onChangeHandler("name")}
            />
            <label htmlFor="first_name">First Name</label>
          </div>
        </div>
        <div className="input-field col s12">
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={onChangeHandler("email")}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field col s12">
          <input
            id="password"
            type="password"
            value={values.password}
            onChange={onChangeHandler("password")}
          />
          <label htmlFor="password">Password</label>
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          onClick={onSubmitHandler}
        >
          Sign up
          <i className="material-icons right">send</i>
        </button>
      </div>
      <div className="card" style={{ padding: "2%" }}>
        <h6>
          Don't have an account? <Link to="/login"> Login </Link>
        </h6>
      </div>
    </div>
  );
};

export default SignupForm;
