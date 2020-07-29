import React, { useState, useEffect } from "react";
import CreatePostForm from "../components/Posts/CreatePostForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { imageUploadCloud, createNewPost } from "../helpers/post";
import { isAuth } from "../helpers/auth";
import { useHistory } from "react-router-dom";

const CreatePost = () => {
  const history = useHistory();
  const [values, setValues] = useState({
    title: "",
    body: "",
    image: "",
  });
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (url !== "") {
      newPost();
    }
  }, [url]);

  const onTextChangeHandler = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const loadImage = () => {
    const data = new FormData();
    data.append("file", values.image);
    data.append("upload_preset", "sociogram");
    data.append("cloud_name", "manan07");
    imageUploadCloud(data).then((url) => {
      setUrl(url);
    });
  };

  const imageChangeHandler = (e) => {
    setValues({ ...values, image: e.target.files[0] });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    loadImage();
  };

  const newPost = () => {
    createNewPost(
      {
        title: values.title,
        body: values.body,
        image: url,
      },
      isAuth().token
    ).then((response) => {
      if (response.error) {
        console.log(response.error);
        console.log(values);
        toast.error(`${response.error}`);
      } else {
        toast.success(`Post created successfully`);
        history.push(`/profile/${isAuth().user._id}`);
      }
    });
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <CreatePostForm
        onSubmitHandler={onSubmitHandler}
        onTextChangeHandler={onTextChangeHandler}
        imageChangeHandler={imageChangeHandler}
        values={values}
      />
    </>
  );
};

export default CreatePost;
