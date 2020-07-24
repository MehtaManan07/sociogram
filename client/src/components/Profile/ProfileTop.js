import React from 'react'

const ProfileTop = ({ state, myPosts }) => {
    return (
        <div className="profile-top row" style={{ marginBottom: '40px' }}>
          <div className="">
           {state ? <img
              className="profileImg"
              src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="name"
              //   style={{ width: '160px', height: '160px', borderRadius: '80px' }}
            /> : 'Loading'}
          </div>
          <div className="">
            <h4> {state ? state.name : 'loading'} </h4>
            <div className="profile-follow">
                <h6> {myPosts.length} Posts </h6>
                <h6> 10 Followers </h6>
                <h6> 10 Following </h6>
            </div>
        </div>
      </div>
    )
}

export default ProfileTop
