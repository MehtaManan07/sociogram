import React from "react";

const Register = () => {
  return (
    <div className="row">
      <div className="auth-card">
      <div className="card">
        <h2>Sociogram</h2>
        <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate" />
          <label for="password">Password</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate" />
          <label for="email">Email</label>
        </div>
      </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Submit
          <i className="material-icons right">send</i>
        </button>
      </div>
      </div>
    </div>
  );
};

export default Register;

/* 
  <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Card Title</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
*/