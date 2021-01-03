import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./TweetBox.css";
import { useStateValue } from "./StateProvider";

export default function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const [{}, dispatch] = useStateValue();

  const sendTweet = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_POSTS",
      post: {
        displayName: "Muhammad Ameen",
        Username: "King",
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar: "https://wallpaperaccess.com/full/1267412.jpg",
      },
    });
    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={"https://wallpaperaccess.com/full/1267412.jpg"} />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's Happening"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter Image URL"
          type="text"
        />
        <Button
          type={"submit"}
          disabled={!tweetImage || !tweetMessage}
          onClick={sendTweet}
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}
