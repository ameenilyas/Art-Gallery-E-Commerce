import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./TweetBox.css";
import db from "./firebase";

export default function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Bugs Bunny",
      Username: "bugsbunny",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://static.wikia.nocookie.net/worldofmayhem_gamepedia_en/images/2/2b/Bugs_Bunny.png/revision/latest/scale-to-width-down/256?cb=20181006100648",
    });
    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar
            src={
              "https://b-rights.com/wp-content/uploads/2013/06/01TOMUK12_CAAB_TJFG6.jpg"
            }
          />
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
        <Button onClick={sendTweet} className="tweetBox__tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
}
