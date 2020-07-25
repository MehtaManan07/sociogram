import Axios from "axios";

export const imageUploadCloud = (data) => {
  return Axios.post(
    "https://api.cloudinary.com/v1_1/manan07/image/upload",
    data
  )
    .then((response) => {
      console.log(response);
      return response.data.url;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export const createNewPost = (data, token) => {
  return Axios.post(`/api/post/create`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export const fetchAllPosts = (token) => {
  return Axios.get(`/api/post/all`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error.response;
    });
};

export const getusersPosts = (token) => {
  return Axios.get(`/api/post/userPosts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error.response;
    });
};

export const likePost = (token, postId) => {
  return Axios.put(`/api/post/like`, JSON.stringify({postId}), {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  .then(res => {
    return res.data
  })
  .catch(err => {
    console.log(err.response)
    return err
  })
};

export const unlikePost = (token, postId) => {
  return Axios.put(`/api/post/unlike`, JSON.stringify({postId}), {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  .then(res => {
    return res.data
  })
  .catch(err => {
    console.log(err.response)
    return err
  })
};
