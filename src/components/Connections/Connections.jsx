import React, { useState } from "react";
import "./ConnectionStyles.scss";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/images/icon.png";
import { Users } from "../../assets/resources/Resources";

function Connections() {
  const navigate = useNavigate();
  const viewMore = () => {
    navigate("/connections", { state: Users });
  };
  const [connection, setConnection] = useState([]);
  return (
    <div className="Carticle">
      <h3>Connections (18)</h3>
      <div className="CarticleTab">
        {Users?.slice(0, 3).map((connections) => {
          return (
            <div key={connections.id} className="C-section">
              <div className="Cicons">
                <img src={icon} alt="" />
              </div>
              <div className="Cdetails">
                <h5>{`${connections.username}`}</h5>
                <div className="CmoreDetails">
                  <p>{`${connections.position}`}</p>
                  <p>{`${connections.friend_since_days} days`}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="CviewMore">
        <button onClick={viewMore}>View More</button>
      </div>
    </div>
  );
}

export default Connections;
