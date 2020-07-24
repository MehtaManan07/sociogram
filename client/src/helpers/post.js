import { API } from "./config";
import Axios from "axios";

export const imageUploadCloud = (data) => {
  return Axios.post("https://api.cloudinary.com/v1_1/manan07/image/upload",data)
    .then((response) => {
      console.log(response);
      return response.data.url
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export const createNewPost = (data) => {
  return Axios.post(`${API}/post/create`, data, {
    headers: { "Content-Type": "application/json" },
  }).then(response => {
    console.log(response)
    return response.data
  }).catch(error => {
    console.log(error)
    return error.response;
  })
};

export const fetchAllPosts = (token) => {
  return Axios.get(`${API}/post/all`,{
    headers: {
      Authorixation: `Bearer ${token}`
    }
  }).then(response => {
    console.log(response)
    return response.data
  }).catch(error => {
    console.log(error)
    return error.response;
  })
};