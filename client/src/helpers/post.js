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
      return error.response.data
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

export const fetchFollowingPosts = (token) => {
  return Axios.get(`/api/post/getFollowing`, {
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

export const postById = (token, postId) => {
  return Axios.get(`/api/post/post/${postId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error.response.data);
      return error.response.data;
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
  return Axios.put(`/api/post/like`, JSON.stringify({ postId }), {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err.response);
      return err;
    });
};

export const unlikePost = (token, postId) => {
  return Axios.put(`/api/post/unlike`, JSON.stringify({ postId }), {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err.response);
      return err;
    });
};

export const makeComment = (token, data) => {
  console.log(token, data);
  return Axios.put(`/api/post/addComment`, JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((err) => {
      console.log(err.response);
      return err.response.data;
    });
};

export const postDelete = (token, postId) => {
  return Axios.delete(`/api/post/delete/${postId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((err) => {
      console.log(err.response);
      return err.response.data;
    });
};

export const commentDelete = (token,postId,commentId) => {
  return Axios.delete(`/api/post/delete/comment/${postId}/${commentId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  })
  .then((response) => {
    console.log(response);
    return response.data;
  })
  .catch((err) => {
    console.log(err.response);
    return err.response.data;
  });
}