import React from "react";
import moment from "moment";
import Loader from "../Loader";

const EditProfileHeader = ({ user, imageChangeHandler }) => {
  return (
    <div className="row" style={{ padding: "25px" }}>
      {user ? (
        <>
          <div className="col s2">
            <img src={user.profileImage} alt="..." className="profileImg" />
          </div>
          <div className="col s4">
            <h3> {user.name} </h3>
            <p>
              username: <strong>{user.username}</strong>
            </p>
            <div className="file-field input-field">
            <div className="btn">
              <span> Change Image </span>
              <input type="file" onChange={imageChangeHandler} />
            </div>
            <div className="file-path-wrapper">
              <input
                type="text"
                placeholder="Profile picture..."
                className="file-path validate"
              />
            </div>
          </div>
          </div>
          <div className="col s1.5 right">
            <p>
              Joined
              <span className="badge blue">
                {moment(user.date).format("DD-MM-YYYY")}
              </span>
            </p>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default EditProfileHeader;
