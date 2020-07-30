import React, { useState, useEffect, useContext } from "react";
import { postDelete, fetchFollowingPosts } from "../helpers/post";
import { Link } from "react-router-dom";
import { isAuth } from "../helpers/auth";
import { UserContext } from "../App";
import Likes from "../components/Posts/Likes";
import PostBody from "../components/Posts/PostBody";
import CommentForm from "../components/Posts/CommentForm";
import Loader from "../components/Loader";

const SubPosts = () => {
  useEffect(() => {
    fetchPosts();
  }, []);
  const [posts, setPosts] = useState([]);

  const { state } = useContext(UserContext);

  const fetchPosts = () => {
    fetchFollowingPosts(isAuth().token).then((res) => {
      if (res.error) {
        console.log(res.error);
      } else {
        const reversedArray = res.reverse();
        setPosts(reversedArray);
      }
    });
  };

  const onDeleteClicked = (postId) => {
    alert("Are you sure? This cannot be undone...")
    postDelete(isAuth().token, postId).then((res) => {
      console.log(res);
    });
    fetchPosts();
  };

  return (
    <div className="home">
      {posts.length !== 0 ? 
        posts.map((post) => (
          <div key={post._id} className="card home-card">
            <h5>
              <Link to={`/profile/${post.user._id}`} style={{ color: "#000" }}>
                {post.user.name}{" "}
              </Link>
            </h5>
              {post.user._id === state._id && (
                <i
                  className="fa fa-trash right"
                  onClick={() => onDeleteClicked(post._id)}
                  style={{ cursor: "pointer", marginTop: 1 }}
                ></i>
              )}
            <div className="card-image">
            {
              post.image ? 
              <Link to={`/singlepost/${post._id}`}>
                <img src={post.image} alt="postImage" />
              </Link> : <Loader />
            }
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
                  View all {post.comments.length} comments
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
        )) : <Loader text="No Posts Found" /> }
    </div>
  );
};

export default SubPosts;