import React from "react";

const PostBody = ({ post }) => {
  return (
    <div>
      <h6>
        <strong
          style={{ cursor: "pointer" }}
          onClick={() => alert("take me to his profile")}
        >
          {post.user && post.user.name} {" "} {" "}
        </strong>
        {post.title}
      </h6>
      <p>{post.body}</p>
    </div>
  );
};

export default PostBody;
