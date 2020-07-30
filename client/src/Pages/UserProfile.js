import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProfile } from "../helpers/user";
import { isAuth } from "../helpers/auth";
import ProfileTop from "../components/Profile/ProfileTop";
import ProfilePosts from "../components/Profile/ProfilePosts";
import { UserContext } from "../App";

const UserProfile = () => {
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);

  const { state, dispatch } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    loadProfile();
  }, [id]);

  const loadProfile = () => {
    getProfile(isAuth().token, id).then((res) => {
      if (res.error) {
        console.log(res.error);
      }
      console.log(res.user)
      setUser(res.user);
      setPosts(res.posts);
    });
  };
  return (
    <div style={{ maxWidth: "950px", margin: "10px auto" }}>
      <ProfileTop myPosts={posts} user={user} userId={id} />
      <hr />
      <ProfilePosts myPosts={posts} />
    </div>
  );
};

export default UserProfile;
