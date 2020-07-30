import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProfile } from "../../helpers/user";
import { isAuth } from "../../helpers/auth";

const EditProfile = () => {
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadProfile();
  }, [id]);

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
    <div>
      <h1>Hello from Edit Profile </h1>
      {JSON.stringify(user)}
    </div>
  );
};

export default EditProfile;
