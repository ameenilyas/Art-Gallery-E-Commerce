import React from "react";
import "./Header.css";
import { ExpandMore, Language, SearchSharp } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://wpcdn.us-east-1.vip.tn-cloud.net/www.channel3000.com/content/uploads/2019/12/best-companies-airbnb_30158368_4862691_ver1-0.jpg"
          alt=""
        />
      </Link>
      <div className="header__center">
        <input type="text" />
        <SearchSharp />
      </div>
      <div className="header__right">
        <p>Become a Host</p>
        <Language />
        <ExpandMore />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
