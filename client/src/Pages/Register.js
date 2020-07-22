import React, { useState } from "react";
import SignupForm from "../components/Auth/SignupForm";
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { registerUser } from "../helpers/auth";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const history = useHistory()

  const onSubmitHandler = (e) => {
    e.preventDefault();
    registerUser({
      name: values.name,
      password: values.password,
      email: values.email
    }).then((response) => {
      if(response.error) {
        console.log(response.error)
        toast.error(`${response.error}`)
      } else {
        setValues({ ...values, name: '', email: '', password: '' })
        history.push('/login')
      }
    });
  };

  const onChangeHandler = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  return (
    <>
      <SignupForm
        values={values}
        onSubmitHandler={onSubmitHandler}
        onChangeHandler={onChangeHandler}
      />
      <ToastContainer />
    </>
  );
};

export default Register;
