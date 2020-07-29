import React, { useEffect, useState, useContext, Fragment } from "react";
import { isAuth } from "../../helpers/auth";
import { UserContext } from "../../App";
import { postById } from "../../helpers/post";
import Likes from "./Likes";
import CommentForm from "./CommentForm";
import Loader from "../Loader";
import PostBody from "./PostBody";

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
      { post.image ?  <img
          height="100%"
          className="column1"
          src={post.image}
          alt={post.title}
        /> : <Loader />}
        {post.user && (
          <div className="column2" style={{ padding: "20px" }}>
            <div className="title" style={{ padding: "2px" }}>
              {post && <PostBody post={post} />}
            </div>
            <hr />
            <div className="comments">
              <ul>
                {post.comments &&
                  post.comments.map((comment) => (
                    <Fragment key={comment._id}>
                    <li style={{ paddingBottom: "3px" }}>
                      <strong> {comment.name}: </strong> {comment.text}
                    </li>
                    </Fragment>
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
