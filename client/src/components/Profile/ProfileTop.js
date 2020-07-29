import React, { useState } from "react";
import { isAuth } from "../../helpers/auth";
import Loader from "../Loader";

const ProfileTop = ({ state, myPosts, userId, user }) => {



  return (
    <div className="profile-top row" style={{ marginBottom: "40px" }}>
      <div className="">
        {state ? (
          <img
            className="profileImg"
            src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="name"
              // style={{ width: '160px', height: '160px', borderRadius: '80px' }}
          />
        ) : (
          <Loader />
        )}
      </div>
      <div className="">
        <div className="form-contaiqner">
          <h4 className="input-forma"> {user ? user.name : <Loader />} </h4>
        </div>
        {myPosts ? (
          <div className="profile-follow">
            {state ? (
              <>
                <h6> {myPosts.length} Posts </h6>
                <h6> {myPosts.length} Followers </h6>
                <h6> {myPosts.length} Following </h6>
              </>
            ) : (
              <Loader />
            )}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default ProfileTop;
