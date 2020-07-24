import React, { useState, useEffect } from "react";
import { fetchAllPosts } from "../helpers/post";
import { isAuth } from "../helpers/auth";
const Home = () => {
  useEffect(() => {
    fetchPosts();
  }, []);
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    fetchAllPosts(isAuth().token).then((res) => {
      if (res.error) {
        console.log(res.error);
      } else {
        setPosts(res);
      }
    });
  };

  return (
    <div className="home">
      { posts && posts.map((post) => (
        <div key={post._id} className="card home-card">
          <h5>{post.user.name}</h5>
          <div className="card-image">
            <img
              src={post.image}
              alt="postImage"
            />
          </div>
          <div className="card-content">
            <i className="material-icons" style={{ color: "red" }}>
              favorite
            </i>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
