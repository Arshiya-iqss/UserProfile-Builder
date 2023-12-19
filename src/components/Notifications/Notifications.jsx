import React, { useState } from "react";
import "./NotificationStyles.scss";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/images/icon.png";
import { Notification } from "../../assets/resources/Resources";

function Notifications() {
  const navigate = useNavigate();
  const viewMore = () => {
    navigate("/notifications");
  };
  const [notification, setNotification] = useState([]);
  return (
    <div className="Narticle">
      <h3>Notifications</h3>
      <div className="NarticleTab">
        {Notification?.map((notifications) => {
          return (
            <div key={notifications.id} className="N-section">
              <div className="Nicons">
                <img src={icon} alt="" />
              </div>
              <div className="Ndetails">
                <h5>{`${notifications.username}`}</h5>
                <div className="NmoreDetails">
                  <p>{`${notifications.message}`}</p>
                  <p>{`${notifications.timestamp}`}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Notifications;
