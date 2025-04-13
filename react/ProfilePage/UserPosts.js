import React from "react";

const UserPosts = () => {
  const posts = [
    "Post 1: Learning React",
    "Post 2: JSX is cool",
    "Post 3: Hooks are awesome!"
  ];

  return (
    <div>
      <h3>User Posts</h3>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserPosts;
