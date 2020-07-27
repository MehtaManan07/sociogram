import React, { useEffect, useState, useContext } from "react";
import { isAuth } from "../../helpers/auth";
import { UserContext } from "../../App";
import { postById } from "../../helpers/post";
import Likes from "./Likes";
import CommentForm from "./CommentForm";

const IndividualPost = ({ match }) => {
  const [post, setPost] = useState([]);
  const { state } = useContext(UserContext);

  useEffect(() => {
    getPost(match.params.postId);
  }, []);

  const getPost = (postId) => {
    postById(isAuth().token, postId).then((res) => {
      if (res.error) {
        console.error(res.error);
      } else {
        setPost(res);
      }
    });
  };

  return (
    <>
      <div className="card large" style={{ margin: "10px 90px" }}>
        <img
          height="100%"
          className="column1"
          src={post.image}
          alt={post.title}
        />
        {post.user && (
          <div className="column2" style={{ padding: "20px" }}>
            <div className="title" style={{ padding: "2px" }}>
              <h5> {post.user.name} </h5>
            </div>
            <hr />
            <div className="comments">
              <ul>
                {post.comments &&
                  post.comments.map((comment) => (
                    <li key={comment._id} style={{ paddingBottom: "3px" }}>
                      <strong> {comment.name}: </strong> {comment.text}
                    </li>
                  ))}
              </ul>
            </div>
            <br />
            <hr />
            <br />
            <div className="footer">
              <Likes state={state} post={post} setPost={setPost} />
              <CommentForm setPost={setPost} post={post} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default IndividualPost;
