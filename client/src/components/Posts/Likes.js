import React from "react";

const Likes = ({ post, state, like, unLike }) => {
  return (
    <>
      {post.likes.includes(state._id) ? (
        <i
          className="fa fa-heart fa-2x"
          onClick={() => unLike(post._id)}
          style={{ cursor: "pointer", color: "rgba(255,0,0,0.5)" }}
        ></i>
      ) : (
        <i
          className="fa fa-heart-o fa-2x"
          onClick={() => like(post._id)}
          style={{ cursor: "pointer", color: "rgba(255,0,0,0.5)" }}
        ></i>
      )}
      <h6>{post.likes.length} likes</h6>
    </>
  );
};

export default Likes;
