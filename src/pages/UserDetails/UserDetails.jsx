import React from "react";
import "./UserDetails.scss";
import Linkedin from "../../assets/images/linkedin.png";
import dribbble from "../../assets/images/dribbble.png";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";

function UserDetails({ userData }) {
  console.log(userData);
  return (
    <div className="details">
      <div className="id">
        <h1>{userData.name}</h1>
        <p>{`@${userData.username}.profyll`}</p>
      </div>

      <div className="socialIcons">
        <a href={userData.linkedIn}>
          <img src={Linkedin} alt="" />
        </a>
        <a href={userData.github}>
          <img src={instagram} alt="" />
        </a>
        <a href={userData.dribble}>
          <img src={dribbble} alt="" />
        </a>
        <a href={userData.facebook}>
          <img src={facebook} alt="" />
        </a>
      </div>
      <div className="bio">
        <p>{userData.biography}</p>
      </div>
    </div>
  );
}

export default UserDetails;
