import React from "react";
import icon from "../../assets/images/icon.png";

function ConnectionTab({ connections }) {
  return (
    <div key={connections.id} className="CP-section">
      <div className="CPicons">
        <img src={icon} alt="" />
      </div>
      <div className="CPdetails">
        <div className="CPTitle">
          <h2>{`${connections.username}`}</h2>
          <h4>{`${connections.position}`}</h4>
        </div>
        <div className="CPmoreDetails">
          <p>{`${connections.intro}`}</p>
          <p>{`${connections.email}`}</p>
          <p>{`${connections.friend_since_days} days`}</p>
        </div>
      </div>
    </div>
  );
}

export default ConnectionTab;
