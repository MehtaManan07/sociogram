import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import LoginForm from "../components/Auth/LoginForm";
import { loginUser } from "../helpers/auth";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    loginUser({ email: values.email, password: values.password })
    .then(response => {
      if(response.error) {
        console.log(response.error)
        toast.error(response.error)
      } else {
        console.log(response)
        setValues({ ...values, email: '', password: '' })
        toast.success('hellllo')
      }
    })
  };

  return (
    <>
    <LoginForm
      onSubmitHandler={onSubmitHandler}
      values={values}
      onChangeHandler={onChangeHandler}
    />
    <ToastContainer />
    </>
  );
};

export default Login;
