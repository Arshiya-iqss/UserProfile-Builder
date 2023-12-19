import React, { useState } from "react";
import "./OpportunityStyles.scss";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/images/icon.png";
import { OpportunitiesData } from "../../assets/resources/Resources";

function Opportunities() {
  const navigate = useNavigate();
  const viewMore = () => {
    navigate("/opportunity", { state: OpportunitiesData });
  };
  const [opportunity, setOpportunity] = useState([]);

  return (
    <div className="Oarticle">
      <h3>Opportunity</h3>
      <div className="OarticleTab">
        {OpportunitiesData?.slice(0, 3).map((opportunities) => {
          return (
            <div key={opportunities.id} className="O-section">
              <div className="Oicons">
                <img src={icon} alt="" />
              </div>
              <div className="Odetails">
                <h5>{`${opportunities.position}`}</h5>
                <div className="OmoreDetails">
                  <p>{`${opportunities.company}`}</p>
                  <p>{`${opportunities.experience_needed}`}</p>
                  <p>{` ${opportunities.salary}`}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* {!Opportunity && ( */}
      <div className="OviewMore">
        <button onClick={viewMore}>View More</button>
      </div>
      {/* )} */}
    </div>
  );
}

export default Opportunities;
