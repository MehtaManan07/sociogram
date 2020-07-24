import React, { useState, useEffect, useContext } from "react";
import ProfileTop from "../components/Profile/ProfileTop";
import ProfilePosts from "../components/Profile/ProfilePosts";
import { getusersPosts } from "../helpers/post";
import { isAuth } from "../helpers/auth";
import { UserContext } from '../App'

const Profile = () => {
  const [myPosts, setMyPosts] = useState([]);
  useEffect(() => {
    fetchPosts()
  }, []);

  const {state} = useContext(UserContext)

  const fetchPosts = () => {
    getusersPosts(isAuth().token).then((res) => {
      if (res.error) {
        console.log(res.error);
      } else {
        setMyPosts(res);
      }
    });
  };

  return (
    <div style={{ maxWidth: "950px", margin: "10px auto" }}>
      <ProfileTop myPosts={myPosts} state={state}  />
      <hr />
      <ProfilePosts myPosts={myPosts} />
    </div>
  );
};

export default Profile;
