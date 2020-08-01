import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProfile } from "../../helpers/user";
import { isAuth } from "../../helpers/auth";
import EditProfileHeader from "../../components/Profile/EditProfileHeader";
import EditProfileForm from "../../components/Profile/EditProfileForm";
import FourOThree from "../Errors/500";
import { UserContext } from "../../App";

const EditProfile = () => {
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);

  const { state, dispatch } = useContext(UserContext);

  const { id } = useParams();

  useEffect(() => {
    loadProfile();
  }, [id]);

  const imageChangeHandler = () => {};

  const loadProfile = () => {
    getProfile(isAuth().token, id).then((res) => {
      if (res.error) {
        console.log(res.error);
      }
      console.log(res.user);
      setUser(res.user);
      setPosts(res.posts);
    });
  };
  return (
    <>
      {state && id === state._id ? (
        <div className="card" style={{ margin: "15px 20px" }}>
          <EditProfileHeader
            imageChangeHandler={imageChangeHandler}
            user={user}
          />
          <EditProfileForm user={user} />
        </div>
      ) : (
        state && <FourOThree id={state._id} />
      )}
    </>
  );
};

export default EditProfile;
