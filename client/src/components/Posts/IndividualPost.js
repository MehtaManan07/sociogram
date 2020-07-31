import React, { useEffect, useState, useContext, Fragment } from "react";
import { isAuth } from "../../helpers/auth";
import { UserContext } from "../../App";
import { postById, commentDelete } from "../../helpers/post";
import Likes from "./Likes";
import CommentForm from "./CommentForm";
import Loader from "../Loader";
import PostBody from "./PostBody";
import { useHistory, Link } from "react-router-dom";

const IndividualPost = ({ match }) => {
  const [post, setPost] = useState([]);
  const { state } = useContext(UserContext);

  const history = useHistory();

  useEffect(() => {
    getPost(match.params.postId);
  }, [setPost]);

  const getPost = (postId) => {
    console.log("poicha");
    postById(isAuth().token, postId).then((res) => {
      if (res.error) {
        console.error(res.error);
      } else {
        setPost(res);
      }
    });
  };

  const deleteComment = (postId, commentId) => {
    alert("Are you sure? This cannot be undone");
    commentDelete(isAuth().token, postId, commentId).then((res) => {
      setPost(res.post);
    });
  };

  return (
    <>
      <div className="card large" style={{ margin: "10px 90px" }}>
        {post.image ? (
          <img
            height="100%"
            className="column1"
            src={post.image}
            alt={post.title}
          />
        ) : (
          <Loader />
        )}
        {post.user && (
          <div className="column2" style={{ padding: "20px" }}>
            <div className="title" style={{ padding: "2px" }}>
              {post && (
                <>
                  <Link to={`/profile/${post.user._id}`}>
                    <img
                      src={post.user.profileImage}
                      alt="..."
                      className="avatar left"
                    />
                  </Link>
                  <PostBody post={post} />
                </>
              )}
            </div>
            <hr />
            <div className="comments">
              <ul>
                {post.comments &&
                  post.comments.map((comment) => (
                    <Fragment key={comment._id}>
                      <p style={{ paddingBottom: "3px" }}>
                        <strong
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            history.push(`/profile/${comment.user}`)
                          }
                        >
                          {comment.name}:{" "}
                        </strong>{" "}
                        {comment.text}
                        {state._id === comment.user ||
                        post.user._id === state._id ? (
                          <i
                            onClick={() => deleteComment(post._id, comment._id)}
                            className="fa fa-trash right fa-1x"
                            style={{ cursor: "pointer", color: "red" }}
                          ></i>
                        ) : (
                          ""
                        )}
                      </p>
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

/*
    if the logged in user has made the comment, let them delete it.
    Or
    If he owns the post let him delete the comment....
    Algo:-
    if(state._id === comment.user || post.user._id ){

    }
*/
