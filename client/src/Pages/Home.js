import React, { useState, useEffect, useContext } from "react";
import {
  fetchAllPosts,
  likePost,
  unlikePost,
  makeComment,
} from "../helpers/post";
import { isAuth } from "../helpers/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { UserContext } from "../App";
import Likes from "../components/Posts/Likes";
import PostBody from "../components/Posts/PostBody";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    fetchPosts();
  }, []);
  const [posts, setPosts] = useState([]);
  const [comment, setComment] = useState("");

  const { state } = useContext(UserContext);

  const fetchPosts = () => {
    fetchAllPosts(isAuth().token).then((res) => {
      if (res.error) {
        console.log(res.error);
      } else {
        setPosts(res);
      }
    });
  };

  const likeOnePost = (id) => {
    likePost(isAuth().token, id)
      .then((res) => {
        const updatedData =
          posts &&
          posts.map((post) => {
            if (post._id === res._id) {
              return res;
            } else return post;
          });
        setPosts(updatedData);
      })
      .catch((err) => console.log(err));
  };

  const unlikeOnePost = (id) => {
    unlikePost(isAuth().token, id)
      .then((res) => {
        const updatedData = posts.map((post) => {
          if (post._id === res._id) {
            return res;
          } else return post;
        });
        setPosts(updatedData);
      })
      .catch((err) => console.log(err));
  };

  const makeNewComment = (postId, text) => {
    makeComment(isAuth().token, { postId, text }).then((res) => {
      if (res.error) {
        toast.error(res.error);
      } else {
        const updatedData = posts.map((post) => {
          if (post._id === res._id) {
            return res;
          } else return post;
        });
        setPosts(updatedData);
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
    <div className="home">
      <ToastContainer />
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card home-card">
            <h5>{post.user.name}</h5>
            <div className="card-image">
              <img src={post.image} alt="postImage" />
            </div>
            <div className="card-content">
              <div className="likes">
                <Likes
                  post={post}
                  state={state}
                  like={likeOnePost}
                  unLike={unlikeOnePost}
                />
              </div>
              <PostBody post={post} state={state} />
              <Link to={`/singlepost/${post._id}`}>
                View all comments
              </Link>
              <ul>
                {post.comments &&
                  post.comments.slice(-2).map((comment) => (
                    <li key={comment._id}>
                      <strong> {comment.user.name}: </strong> {comment.text}
                    </li>
                  ))}
              </ul>
              <form className="form-container" onSubmit={submitHandler(post)}>
                <input
                  type="text"
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
          </div>
        ))}
    </div>
  );
};

export default Home;
