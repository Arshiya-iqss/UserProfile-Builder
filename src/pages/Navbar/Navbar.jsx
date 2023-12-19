import React from "react";
import "./NavStyles.scss";
import darkmode from "../../assets/images/darkmode.png";
import messages from "../../assets/images/messages.png";
import settings from "../../assets/images/settings.png";
import profile from "../../assets/images/profile.png";
import Logo from "../../components/Logo/Logo";

function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        <Logo />
      </div>
      <div className="listItems">
        <a href="">
          <img src={darkmode} alt="" />
        </a>
        <a href="/messages">
          <img src={messages} alt="" />
        </a>
        <a href="/settings">
          <img src={settings} alt="" />
        </a>
        <a href="/profile">
          <img src={profile} alt="" />
        </a>
      </div>
    </div>
  );
}
export default Navbar;
