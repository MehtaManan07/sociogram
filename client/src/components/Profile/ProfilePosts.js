import React from "react";

const ProfilePosts = ({ myPosts }) => {
  return (
    <div>
      {myPosts &&
        myPosts.map((post) => (
          <img
            key={post._id}
            style={{ width: "30%", margin: "1%" }}
            src={post.image}
            alt={post.title}
          />
        ))}
      {/* <img
      style={{ width: '30%', margin: '1%' }}
        src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="name"
      />
      <img
      style={{ width: '30%', margin: '1%' }}
        src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="name"
      />
      <img
      style={{ width: '30%', margin: '1%' }}
        src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="name"
      />
      <img
      style={{ width: '30%', margin: '1%' }}
        src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="name"
      />
      <img
      style={{ width: '30%', margin: '1%' }}
        src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="name"
      />
      <img
      style={{ width: '30%', margin: '1%' }}
        src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="name"
      /> */}
    </div>
  );
};

export default ProfilePosts;
