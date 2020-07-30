import React from "react";
import { Link, useHistory } from "react-router-dom";

const EditProfileForm = ({
  user,
  onSubmitHandler,
  imageChangeHandler,
  onChangeHandler,
}) => {

    const history = useHistory()

  return (
    <div className="auth-card">
        <form>
          <div className="row">
            <div className="input-field col s6">
              <input
                type="text"
                value={user.name}
                //   onChange={onChangeHandler("name")}
              />
              <span className="helper-text">
                Name
              </span>
            </div>
            <div className="input-field col s6">
              <input
                type="text"
                  value={user.username}
                //   onChange={onChangeHandler("name")}
              />
              <span className="helper-text">
                Username
              </span>
            </div>
          </div>
          <div className="input-field col s12">
            <input
              type="email"
              disabled
              value={user.email}
              // onChange={onChangeHandler("email")}
            />
            <span htmlFor="name" className="helper-text">
              Email
            </span>
          </div>
          <div className="input-field col s12">
            <input
              type="text"
              rows={Math.round(20)}
              cols={Math.round(20)}
              value={user.bio}
              // onChange={onChangeHandler("password")}
            />
            <span className="helper-text">
              Bio
            </span>
          </div>
          <div className="file-field input-field">
            <div className="btn">
              <span> Upload Image </span>
              <input type="file" />
            </div>
            <div className="file-path-wrapper">
              <input
                type="text"
                placeholder="Profile picture..."
                className="file-path validate"
              />
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            //   onClick={onSubmitHandler}
          >
           Submit
            <i className="material-icons right">send</i>
          </button>
          <button
          style={{ marginLeft: 7 }}
            className="btn waves-effect waves-light"
            type="submit"
          >
           Cancel
            <i className="material-icons right">send</i>
          </button>
        </form>
    </div>
  );
};

export default EditProfileForm;
