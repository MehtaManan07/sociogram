import React, { useState, useEffect, useContext } from "react";
import { fetchAllPosts, postDelete } from "../helpers/post";
import { Link } from "react-router-dom";
import { isAuth } from "../helpers/auth";
import { UserContext } from "../App";
import Likes from "../components/Posts/Likes";
import PostBody from "../components/Posts/PostBody";
import CommentForm from "../components/Posts/CommentForm";

const Home = () => {
  useEffect(() => {
    fetchPosts();
  }, []);
  const [posts, setPosts] = useState([]);

  const { state } = useContext(UserContext);

  const fetchPosts = () => {
    fetchAllPosts(isAuth().token).then((res) => {
      if (res.error) {
        console.log(res.error);
      } else {
        const reversedArray = res.reverse();
        setPosts(reversedArray);
      }
    });
  };

  const onDeleteClicked = (postId) => {
    postDelete(isAuth().token, postId).then((res) => {
      console.log(res);
    });
    fetchPosts();
  };

  return (
    <div className="home">
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card home-card">
            <h5>
              <Link to={`/profile/${post.user._id}`} style={{ color: "#000" }}>
                {post.user.name}{" "}
              </Link>
              {post.user._id === state._id && (
                <i
                  className="fa fa-trash"
                  onClick={() => onDeleteClicked(post._id)}
                  style={{ cursor: "pointer", marginTop: 1, float: "right" }}
                ></i>
              )}
            </h5>
            <div className="card-image">
              <Link to={`/singlepost/${post._id}`}>
                <img src={post.image} alt="postImage" />
              </Link>
            </div>
            <div className="card-content">
              <div className="likes">
                <Likes
                  post={post}
                  state={state}
                  posts={posts}
                  setPosts={setPosts}
                  home
                />
              </div>
              <PostBody post={post} />
              {post.comments.length > 2 && (
                <Link
                  to={`/singlepost/${post._id}`}
                  style={{ textDecoration: "none" }}
                >
                  View all comments
                </Link>
              )}

              <ul>
                {post.comments &&
                  post.comments.slice(-2).map((comment) => (
                    <li key={comment._id}>
                      <Link
                        to={`/profile/${comment.user}`}
                        style={{ color: "#000" }}
                      >
                        <strong> {comment.name}: </strong>{" "}
                      </Link>{" "}
                      {comment.text}
                    </li>
                  ))}
              </ul>
              <CommentForm posts={posts} home setPosts={setPosts} post={post} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;
