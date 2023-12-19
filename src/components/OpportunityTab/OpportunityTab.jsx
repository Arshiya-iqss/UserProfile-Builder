import React from "react";
import icon from "../../assets/images/icon.png";

function OpportunityTab({ opportunities }) {
  return (
    <div key={opportunities.id} className="Oppsection">
      <div className="OppIcon">
        <img src={icon} alt="" />
      </div>
      <div className="OppDetails">
        <div className="OppTitle">
          <h2>{`${opportunities.position}`}</h2>
          <h4>{`${opportunities.company} `}</h4>
          <p>{`${opportunities.location}`}</p>
        </div>
        <div className="OppMoreDetails">
          <p>{`${opportunities.description}`}</p>
          <p>{`${opportunities.experience_needed}`}</p>
          <p>{`${opportunities.salary}`}</p>
        </div>
      </div>
    </div>
  );
}

export default OpportunityTab;
