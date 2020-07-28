import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProfile } from "../helpers/user";
import { isAuth } from "../helpers/auth";
import ProfileTop from "../components/Profile/ProfileTop";
import ProfilePosts from "../components/Profile/ProfilePosts";

const UserProfile = () => {
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    getProfile(isAuth().token, id).then((res) => {
      if (res.error) {
        console.log(res.error);
      }
      setUser(res.user);
      setPosts(res.posts);
    });
  }, []);
  return (
    <div style={{ maxWidth: "950px", margin: "10px auto" }}>
      <ProfileTop myPosts={posts} state={user} userId={id} />
      <hr />
      <ProfilePosts myPosts={posts} />
    </div>
  );
};

export default UserProfile;
