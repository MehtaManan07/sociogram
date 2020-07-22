import React from "react";

const CreatePost = () => {
  return (
    <div
      className="card input-field"
      style={{
        margin: "100px auto",
        maxWidth: "500px",
        height: "100%",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <input type="text" placeholder="Title of your post..." />
      <input type="text" placeholder="Description..." />
      <div className="file-field input-field">
        <div className="btn">
          <span> Image </span>
          <input type="file" />
        </div>
        <div className="file-path-wrapper">
          <input type="text" className="file-path validate" />
        </div>
      </div>
      <button className="btn waves-effect waves-light" type="submit">
        Create Post
        <i className="material-icons right">send</i>
      </button>
    </div>
  );
};

export default CreatePost;
