import React, {useState, useEffect} from "react";
import { fetchAllPosts } from "../helpers/post";
import {isAuth} from '../helpers/auth'
const Home = () => {
  useEffect(() => {
    console.log(isAuth().token)
    fetchPosts()
  }, [])
  const fetchPosts = () => {
    fetchAllPosts(isAuth().token)
    .then(res => {
      if(res.error) {
        console.log(res.error)
      } else {
        console.log(res)
        setPosts(res)
      }
    })
  }
  const [posts, setPosts] = useState([])
  return (
    <div className="home">
      <div className="card home-card">
        <h5>Name</h5>
        <div className="card-image">
          <img
            src="https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="imagesssssss"
          />
        </div>
        <div className="card-content">
        <i className="material-icons" style={{ color: 'red' }}>favorite</i>
            <h6>title</h6>
            <p>text of the post</p>

        </div>
      </div>
    </div>
  );
};

export default Home;
