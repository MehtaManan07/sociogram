import React from "react";

const PostBody = ({ post, state }) => {
  return (
    <div>
      <h6>
        <strong
          style={{ cursor: "pointer" }}
          onClick={() => alert("take me to his profile")}
        >
          {state && state.name} {" "} {" "}
        </strong>
        {post.title}
      </h6>
      <p>{post.body}</p>
    </div>
  );
};

export default PostBody;
