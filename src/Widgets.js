import { Search } from "@material-ui/icons";
import React from "react";
import {
  TwitterShareButton,
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's Happening</h2>
        <TwitterTweetEmbed tweetId={"1343973546322780162"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName={"@afridi"}
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://facebook.com/shahidafridi"}
          options={{ text: "#React JS is Awesome", via: "afridi" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
