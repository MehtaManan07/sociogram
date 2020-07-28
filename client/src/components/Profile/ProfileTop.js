import React, { useState } from "react";
import { isAuth } from "../../helpers/auth";
import { followUser } from "../../helpers/user";

const ProfileTop = ({ state, myPosts, userId }) => {
  const [buttonText, setButtonText] = useState("Follow"); 
  const follow = (id) => {
    followUser(isAuth().token, id).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="profile-top row" style={{ marginBottom: "40px" }}>
      <div className="">
        {state ? (
          <img
            className="profileImg"
            src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="name"
            //   style={{ width: '160px', height: '160px', borderRadius: '80px' }}
          />
        ) : (
          "Loading"
        )}
      </div>
      <div className="">
        <div className="form-contaiqner">
          <h4 className="input-forma"> {state ? state.name : "loading"} </h4>
          <button
            className="btn waves-effect waves-light"
            onClick={() => follow(userId)}
          >
            {buttonText}{" "}
          </button>
        </div>
        {myPosts && (
          <div className="profile-follow">
            {state && (
              <>
                <h6> {myPosts.length} Posts </h6>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileTop;
