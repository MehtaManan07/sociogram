import axios from "axios";
import { API } from "./config";

export const registerUser = (user) => {
  return axios
    .post(`${API}/auth/register`, JSON.stringify(user), {
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
    .post(API + "/auth/login", JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error.message);
      return error;
    });
};
