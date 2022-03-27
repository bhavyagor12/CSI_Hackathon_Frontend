import React from "react";
import Post from "./Post";
const Posts = () => {
  const posts = [
    {
      id: "123",
      username: "bhavya",
      description: "WORKERS NEEDED FOR LIFTING WORK",
      image:
        "https://imgs.search.brave.com/GMCmde1UaQqdiredEz93PFNYvxKtYvKGzqvBWsml-OY/rs:fit:640:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5z/UFdLbnhzdnFTZFYy/QmVUUTJWeEZ3SGFG/ZiZwaWQ9QXBp",
      location: "19.182755,72.840157",
    },
    {
      id: "123",
      username: "bhavya",
      description: "WORKERS NEEDED FOR FURNITURE WORK",
      image:
        "https://imgs.search.brave.com/CgcInBjG1iUznl_YiJc2H1qLNegxQO6CCqKT9VopADA/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5m/cmVlcG5naW1nLmNv/bS9kb3dubG9hZC9o/b3VzZS8xLTItY29u/c3RydWN0aW9uLWJ1/aWxkaW5nLXBuZy5w/bmc",
      location: "Mumbai",
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
