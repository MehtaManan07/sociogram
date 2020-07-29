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
      {state && state._id === id ? (
        <>
          <ProfileTop myPosts={posts} state={state} userId={id} />
        </>
      ) : (
        <>
          <ProfileTop myPosts={posts} state={user} userId={id} />
        </>
      )}
      <hr />
      <ProfilePosts myPosts={posts} />
    </div>
  );
};

export default UserProfile;