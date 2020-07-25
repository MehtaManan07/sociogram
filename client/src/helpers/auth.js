import axios from "axios";

export const registerUser = (user) => {
  return axios
    .post(`/api/auth/register`, JSON.stringify(user), {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
      return error.response.data;
    });
};

export const loginUser = (data) => {
  return axios
    .post("/api/auth/login", JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error.message);
      return error.response.data;
    });
};

export const authenticate = (data, next) => {
  console.log(data)
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const isAuth = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else return false;
};
