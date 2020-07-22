import React, { useState } from "react";
import SignupForm from "../components/Auth/SignupForm";
import { registerUser } from "../helpers/auth";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    registerUser({
      name: values.name,
      password: values.password,
      email: values.email
    }).then((response) => console.log(response));
  };

  const onChangeHandler = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  return (
    <>
      {JSON.stringify(values)}
      <SignupForm
        values={values}
        onSubmitHandler={onSubmitHandler}
        onChangeHandler={onChangeHandler}
      />
    </>
  );
};

export default Register;
