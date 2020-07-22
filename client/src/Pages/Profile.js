import React from "react";
import ProfileTop from "../components/Profile/ProfileTop";
import ProfilePosts from "../components/Profile/ProfilePosts";

const Profile = () => {
  return (
    <div style={{ maxWidth: "950px", margin: "10px auto" }}>
      <ProfileTop />
      <hr />
      <ProfilePosts />
    </div>
  );
};

export default Profile;
