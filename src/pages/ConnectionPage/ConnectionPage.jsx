import React from "react";
import "./ConnPageStyles.scss";
import Navbar from "../Navbar/Navbar";
import { useLocation } from "react-router-dom";
import ConnectionTab from "../../components/ConnectionTab/ConnectionTab";

function ConnectionPage() {
  const { state: connectionList } = useLocation();
  return (
    <>
      <Navbar />
      <div className="CParticle">
        <div className="CPmainTitle">
          <h1>Connections (12)</h1>
          <a href="/">Back</a>
        </div>
        <div className="CPTab">
          {connectionList?.map((connections) => {
            return (
              <ConnectionTab key={connections.id} connections={connections} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ConnectionPage;
