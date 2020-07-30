import React from "react";
import moment from "moment";
import Loader from "../Loader";

const EditProfileHeader = ({ user }) => {
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
            <button className="btn"> Change Image </button>
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
