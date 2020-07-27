import React, { useState } from "react";
import { makeComment } from "../../helpers/post";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { isAuth } from "../../helpers/auth";

const CommentForm = ({ posts, inputComment, setPosts, setPost, post, home = false }) => {
  const [comment, setComment] = useState("");

  const makeNewComment = (postId, text) => {
    makeComment(isAuth().token, { postId, text }).then((res) => {
      if (res.error) {
        toast.error(res.error);
      } else {
        console.log(res);
        if (home) {
          const updatedData = posts.map((post) => {
            if (post._id === res._id) {
              return res;
            } else return post;
          });
          setPosts(updatedData);
        } else {
          const updatedData = (post) => {
            if (post._id === res._id) {
              return res;
            } else return post;
          };
          setPost(updatedData);
        }
        toast.success("New comment added successfully");
      }
    });
  };

  const submitHandler = (post) => (event) => {
    event.preventDefault();
    makeNewComment(post._id, comment);
    setComment("");
  };

  return (
    <div>
      <ToastContainer autoClose={3000} />
      <form className="form-container" onSubmit={submitHandler(post)}>
        <input
          type="text"
          ref={inputComment}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="input-form"
          placeholder="Add a comment"
        />
        <span
          onClick={submitHandler(post)}
          className="waves-effect waves-teal btn-flat"
        >
          Post
        </span>
      </form>
    </div>
  );
};

export default CommentForm;
