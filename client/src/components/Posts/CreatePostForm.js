import React from "react";

const CreatePostForm = ({
  values,
  onTextChangeHandler,
  imageChangeHandler,
  onSubmitHandler,
}) => {
  return (
    <form onSubmit={onSubmitHandler}>
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
        <input
          type="text"
          placeholder="Title of your post..."
          value={values.title}
          onChange={onTextChangeHandler("title")}
          required
        />
        <input
          type="text"
          placeholder="Description..."
          value={values.body}
          onChange={onTextChangeHandler("body")}
        />
        <div className="file-field input-field">
          <div className="btn">
            <span> Image </span>
            <input type="file" onChange={imageChangeHandler} />
          </div>
          <div className="file-path-wrapper">
            <input type="text" className="file-path validate" />
          </div>
        </div>
        <button
          className="btn waves-effect waves-light"
          onClick={onSubmitHandler}
          type="submit"
        >
          Create Post
          <i className="material-icons right">send</i>
        </button>
      </div>
    </form>
  );
};

export default CreatePostForm;
