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
        <TwitterTweetEmbed tweetId={"1298336338434052096"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName={"tomcruise"}
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://facebook.com/tomcruise"}
          options={{ text: "#React JS is Awesome", via: "tomcruise" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
