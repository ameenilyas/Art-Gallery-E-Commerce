import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import FlipMove from "react-flip-move";
import { useStateValue } from "./StateProvider";

function Feed() {
  const [{ posts }, dispatch] = useStateValue();

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map((post, i) => (
          <Post
            key={i}
            displayName={post.displayName}
            Username={post.Username}
            verified={post.verified}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
