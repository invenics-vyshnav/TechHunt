import React from "react";
import "./styles/jobcomp.css";


const JobComp = ({
    company_logo,
   company_name,
   company_desc,
   is_remote_available,
   role,
   salary,
   location
}) => {


  return (
    <div className="jobcomp-root">
      <div className="jobcomp-container">



        <div className="jobcomp-topsec">
          <div className="jobcomp-compdetails">
            <img src={company_logo} className="jobcomp-logo" alt="logo" />
            <div className="jobcomp-details">
              <div className="jobcomp-title">{company_name}</div>
              <div className="jobcomp-desc">
                {company_desc}
              </div>
            </div>
          </div>
          <div className="jobcomp-remote">{is_remote_available ? "Remote avaolabe": "Remote not available"}</div>
        </div>
        <div className="jobcomp-botsec">
          <div className="jobcomp-botsec-left">
            <div className="jobcomp-role">{role}</div>
            <div className="jobcomp-location">{location}</div>
            <div className="jobcomp-salary">{salary}</div>
          </div>

          <div className="jobcomp-botsec-right">
            <button className="jobcomp-btn-view">View </button>
            <button className="jobcomp-btn-apply">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobComp;
