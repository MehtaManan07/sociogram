import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../App";
import { isAuth } from "../helpers/auth";

const Landing = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory()
  useEffect(() => {
    if (isAuth()) {
      dispatch({ type: "USER", payload: isAuth().user });
      history.push('/home')
    }
  }, []);
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1
            style={{
              fontSize: "4rem",
              lineHeight: "1.2",
              marginBottom: "1rem",
            }}
          >
            SOCIOGRAM
          </h1>
          <p className="lead">
            {" "}
            A Social Media So Desirable, feel the social experience{" "}
          </p>
          <div className="buttons">
            <Link to="register" className="btn btn-large btn-1">
              Sign Up
            </Link>
            <Link to="login" className="btn btn-large">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
