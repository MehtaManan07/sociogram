import Axios from "axios";

export const getProfile = (token, id) => {
  return Axios.get(`/api/user/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err.response.data;
    });
};

export const followUser = (token, followId) => {
  console.log(followId);
  return Axios.put(`/api/user/follow`, JSON.stringify({ followId }), {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err.response.data;
    });
};

export const unfollowUser = (token, unfollowId) => {
  console.log(unfollowId);
  return Axios.put(`/api/user/unfollow`, JSON.stringify({ unfollowId }), {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err.response.data;
    });
};
