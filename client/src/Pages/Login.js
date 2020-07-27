import React, { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { UserContext } from '../App'
import "react-toastify/dist/ReactToastify.min.css";
import LoginForm from "../components/Auth/LoginForm";
import { loginUser, authenticate, isAuth } from "../helpers/auth";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory()
  const {dispatch} = useContext(UserContext)
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  
  const onChangeHandler = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    loginUser({ email: values.email, password: values.password }).then(
      (response) => {
        if (response.error) {
          console.log(response.error);
          toast.error(response.error);
        } else {
          authenticate(response, () => {
            setValues({ ...values, email: "", password: "" });
            toast.success("hellllooo");
            dispatch({ type: 'USER', payload: isAuth().user })
            history.push('/home')
          });
        }
      }
    );
  };

  return (
    <>
      <LoginForm
        onSubmitHandler={onSubmitHandler}
        values={values}
        onChangeHandler={onChangeHandler}
      />
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default Login;
