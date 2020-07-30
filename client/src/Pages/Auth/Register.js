import React, { useState, useEffect } from "react";
import SignupForm from "../../components/Auth/SignupForm";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { registerUser } from "../../helpers/auth";
import { imageUploadCloud } from "../../helpers/post";

const Register = () => {
  const history = useHistory();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    profileImage: "",
  });
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (url !== "") {
      newSignup();
    }
  }, [url]);

  const imageChangeHandler = (e) => {
    setValues({ ...values, profileImage: e.target.files[0] });
    console.log(values)
  };

  const uploadImage = () => {
    const data = new FormData();
    data.append("file", values.profileImage);
    data.append("upload_preset", "sociogram");
    data.append("cloud_name", "manan07");
    imageUploadCloud(data).then((url) => {
      setUrl(url);
    });
  };

  const onChangeHandler = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (values.profileImage === "") {
      setUrl(
        "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553__340.png"
      );
    } else uploadImage();
  };

  const newSignup = () => {
    registerUser({
      name: values.name,
      password: values.password,
      email: values.email,
      profileImage: url,
    }).then((response) => {
      if (response.error) {
        console.log(response.error);
        toast.error(`${response.error}`);
      } else {
        history.push("/login");
      }
    });
  };

  return (
    <>
      <SignupForm
        imageChangeHandler={imageChangeHandler}
        values={values}
        onSubmitHandler={onSubmitHandler}
        onChangeHandler={onChangeHandler}
      />
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default Register;
