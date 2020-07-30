import React from "react";
import { Link } from "react-router-dom";
import Loader from "../Loader";

const ProfilePosts = ({ myPosts }) => {
  return (
    <div>
      {myPosts ? (
        myPosts.map((post) => (
            <Link key={post._id} to={`/singlepost/${post._id}`}>
              <img
                style={{ width: "30%", margin: "1%", maxHeight: 200 }}
                src={post.image}
                alt={post.title}
              />
            </Link>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ProfilePosts;
