import React from "react";
import Post from "./Post";

const Posts = () => {
  const posts = [
    {
      id: "123",
      username: "Bhavya",
      description: "WORKERS NEEDED FOR LIFTING WORK",
      image:
        "https://imgs.search.brave.com/GMCmde1UaQqdiredEz93PFNYvxKtYvKGzqvBWsml-OY/rs:fit:640:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/UFdLbnhzdnFTZFYy/QmVUUTJWeEZ3SGFG/ZiZwaWQ9QXBp",
      location: "19.182755,72.840157",
    },
    {
      id: "234",
      username: "Dhruv",
      description: "WORKERS NEEDED FOR FURNITURE WORK",
      image:
        "https://www.dahuasecurity.com/asset/upload/uploads/image/20201009/-2.jpg",
      location: "28.704060,77.102493",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          image={post.image}
          description={post.description}
          location={post.location}
        />
      ))}
    </div>
  );
};

export default Posts;
