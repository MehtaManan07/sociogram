import React from "react";
import { likePost, unlikePost } from "../../helpers/post";
import { isAuth } from "../../helpers/auth";

const Likes = ({ post, onCommentClick, state, posts, setPost, setPosts, home = false }) => {
  const likeOnePost = (id) => {
    likePost(isAuth().token, id)
      .then((res) => {
        if (home) {
          let updatedData = posts.map((post) => {
            if (post._id === res._id) {
              return res;
            } else return post;
          });
          setPosts(updatedData);
        } else {
          let updatedData = (post) => {
            if (post._id === res._id) {
              return res;
            } else return post;
          };
          setPost(updatedData);
        }
      })
      .catch((err) => console.log(err));
  };

  const unlikeOnePost = (id) => {
    unlikePost(isAuth().token, id)
      .then((res) => {
        if (home) {
          let updatedData = posts.map((post) => {
            if (post._id === res._id) {
              return res;
            } else return post;
          });
          setPosts(updatedData);
        } else {
          let updatedData = (post) => {
            if (post._id === res._id) {
              return res;
            } else return post;
          };
          setPost(updatedData);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {post.likes.includes(state._id) ? (
        <i
          className="fa fa-heart fa-2x"
          onClick={() => unlikeOnePost(post._id)}
          style={{ cursor: "pointer", color: "rgba(255,0,0,0.5)" }}
        ></i>
      ) : (
        <i
          className="fa fa-heart-o fa-2x"
          onClick={() => likeOnePost(post._id)}
          style={{ cursor: "pointer", color: "rgba(255,0,0,0.5)" }}
        ></i>
      )}
      <i
      onClick={onCommentClick}
        className="far fa-comment fa-2x"
        style={{ marginLeft: "8px" }}
      ></i>
      <h6>{post.likes.length} likes</h6>
    </>
  );
};

export default Likes;
