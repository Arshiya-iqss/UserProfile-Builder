import React, { useState } from "react";
import "./MessageStyles.scss";
import { Message } from "../../assets/resources/Resources";
import Navbar from "../Navbar/Navbar";
import icon from "../../assets/images/icon.png";

function Messages() {
  return (
    <div className="Main-Section">
      <Navbar />
      <div className="M-section">
        <h4>Inbox</h4>
        {Message?.map((messages) => {
          return (
            <div className="list">
              <div key={messages.id} className="Msg-Tab">
                <div className="msg-heading">
                  <img src={icon} alt="" />
                </div>
                <div className="msg-details">
                  <div className="detailsHead">
                    <h4>{messages.username}</h4>
                    <p>{`${messages.position} at ${messages.company}`}</p>
                  </div>
                  <div className="detailsMain">
                    <p>{messages.message}</p>
                    <p>{messages.sent}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Messages;
