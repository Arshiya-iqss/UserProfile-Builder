import React from "react";
import Navbar from "../Navbar/Navbar";
import { useLocation } from "react-router-dom";
import "./OppPageStyles.scss";
import OpportunityTab from "../../components/OpportunityTab/OpportunityTab";

function OpportunityPage() {
  const { state: OpportunityList } = useLocation();

  return (
    <>
      <Navbar />
      <div className="OppArticle">
        <div className="OppmainTitle">
          <h1>Opportunities (+12)</h1>
          <a href="/">Back</a>
        </div>
        <div className="OppTab">
          {OpportunityList?.map((opportunities) => {
            return (
              <OpportunityTab
                key={opportunities.id}
                opportunities={opportunities}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default OpportunityPage;
