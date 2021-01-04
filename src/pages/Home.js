import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Apps } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import Search from "./Search";

function App() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail ">Gmail </Link>
          <Link to="/images">Images</Link>
          <Apps />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img
          src={"https://openthread.google.cn/images/ot-contrib-google.png"}
          alt={"Google"}
        />
        <div className="home__searchContainer">
          {/* Search */}
          <Search />
        </div>
      </div>
    </div>
  );
}

export default App;
