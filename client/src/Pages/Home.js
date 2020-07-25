import React, { useState, useEffect, useContext } from "react";
import { fetchAllPosts, likePost, unlikePost } from "../helpers/post";
import { isAuth } from "../helpers/auth";
import { UserContext } from "../App";

const Home = () => {
  useEffect(() => {
    fetchPosts();
  }, []);
  const [posts, setPosts] = useState([]);

  const { state, dispatch } = useContext(UserContext);

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
        const updatedData = posts.map((post) => {
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

  return (
    <div className="home">
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card home-card">
            <h5>{post.user.name}</h5>
            <div className="card-image">
              <img src={post.image} alt="postImage" />
            </div>
            <div className="card-content">
              <div className="col s6 icons">
                {post.likes.includes(state._id) ? (
                  <i
                    className="material-icons"
                    onClick={() => unlikeOnePost(post._id)}
                    style={{ cursor: "pointer" }}
                  >
                    thumb_down
                  </i>
                ) : (
                  <i
                    className="material-icons"
                    onClick={() => likeOnePost(post._id)}
                    style={{ cursor: "pointer" }}
                  >
                    thumb_up
                  </i>
                )}
              </div>
              <h6>{post.likes.length} likes</h6>
              <h5>{post.title}</h5>
              <p>{post.body}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;
