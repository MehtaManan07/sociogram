import React, { useEffect, useContext } from "react";
import { isAuth } from "../../helpers/auth";
import Loader from "../Loader";
import { followUser, unfollowUser } from "../../helpers/user";
import { UserContext } from "../../App";

const ProfileTop = ({ myPosts, setUser, userId, user }) => {
  // console.log(userId, 'state:\n',state,'user:\n', user);
  const { state, dispatch } = useContext(UserContext);

  // useEffect(() => {

  // },[])

  const editProfile = () => {
    alert("editprofile");
  };

  const follow = () => {
    followUser(isAuth().token, userId).then((response) => {
      dispatch({
        type: "UPDATE",
        payload: {
          followers: response.followingg.following,
          followers: response.followingg.followers,
        },
      });
      setUser(response.followingg);
    });
  };

  const unfollow = () => {
    unfollowUser(isAuth().token, userId).then((response) => {
      console.log(response)
      dispatch({
        type: "UPDATE",
        payload: {
          followers: response.unfollowingg.following,
          followers: response.unfollowingg.followers,
        },
      });
      setUser(response.unfollowingg);
    });
  };

  const FollowButton = () =>
    state && user.followers && user.followers.includes(state._id) ? (
      <button className="btn" onClick={unfollow}>Unfollow</button>
    ) : (
      <button className="btn" onClick={follow}>Follow</button>
    );

  const displayButton = () =>
    state && state._id === userId ? (
      <button className="btn" onClick={editProfile}>Edit Profile</button>
    ) : (
      <FollowButton />
    );

  return (
    <div className="profile-top row" style={{ marginBottom: "40px" }}>
      <div className="">
        {state && user.profileImage ? (
          <img
            className="profileImg"
            src={ user && user.profileImage}
            alt="name"
            // style={{ width: '160px', height: '160px', borderRadius: '80px' }}
          />
        ) : (
          <Loader />
        )}
      </div>
      <div className="">
        <div className="form-contaiqner">
          <h4 className="input-forma"> {user ? user.name : <Loader />} </h4>
          {displayButton()}
        </div>
        {myPosts ? (
          <div className="profile-follow">
            {state ? (
              <>
                <h6> {myPosts.length} Posts </h6>
                <h6> {user.followers && user.followers.length} Followers </h6>
                <h6> {user.following && user.following.length} Following </h6>
              </>
            ) : (
              <Loader />
            )}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default ProfileTop;
