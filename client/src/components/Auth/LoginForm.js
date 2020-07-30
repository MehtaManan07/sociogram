import React from "react";
import { Link } from "react-router-dom";

const LoginForm = ({ values, onSubmitHandler, onChangeHandler }) => {
  return (
    <div className="auth-card">
      <div className="card">
        <h2>Sociogram</h2>
        <form onSubmit={onSubmitHandler}>
          <div className="input-field col s12">
            <input
              id="email"
              value={values.email}
              onChange={onChangeHandler("email")}
              type="email"
              className="validate"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field col s12">
            <input
              id="password"
              type="password"
              value={values.password}
              onChange={onChangeHandler("password")}
              className="validate"
            />
            <label htmlFor="password">Password</label>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            onClick={onSubmitHandler}
          >
            Login
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
      <div className="card" style={{ padding: "2%" }}>
        <h6>
          Don't have an account? <Link to="/register"> Sign up </Link>{" "}
        </h6>
      </div>
    </div>
  );
};

export default LoginForm;
