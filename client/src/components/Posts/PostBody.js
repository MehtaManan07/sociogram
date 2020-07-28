import React from "react";
import { Link } from "react-router-dom";
const PostBody = ({ post }) => {
  return (
    <div>
    <Link to={`/profile/${post.user._id}`} style={{ color: "#000" }}>
      <h6>
        <strong style={{ cursor: "pointer" }}>
          {post.user && post.user.name}{" "}
        </strong>
        {post.title}
      </h6>
    </Link>
      <p>{post.body}</p>
    </div>
  );
};

export default PostBody;
