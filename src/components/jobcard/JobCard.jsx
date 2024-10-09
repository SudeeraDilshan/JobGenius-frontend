import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './JobCard.css'; // Import the CSS file
import { HiClock } from "react-icons/hi2";
import { SiLevelsdotfyi } from "react-icons/si";
import { FaMoneyCheckDollar } from "react-icons/fa6";

export const JobCard = () => {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <div className="job-card-logo">
          <img src="Jobmember.png" alt="Company Logo" className="job-card-logo-img" />
        </div>
        <div className="job-card-info">
          <h3 className="job-card-company">codegen</h3>
          <h2 className="job-card-title">Marketing Manager</h2>
          <div className="job-card-tags">
            <span className="job-card-tag onsite">Onsite</span>
            <span className="job-card-location">Sri Lanka</span>
          </div>
        </div>
        <button className="apply-button">
          Apply <span className="arrow">→</span>
        </button>
      </div>
      <div className="job-card-body">
        <div className="job-details">
          <span className="job-detail"> <HiClock /><div>Part Time</div></span>
          <span className="job-detail"><SiLevelsdotfyi/>1-2 years</span>
          <span className="job-detail"><FaMoneyCheckDollar/>USD 9600-10800</span>
        </div>
        <ul className="job-perks">
          <li>Flexible working options</li>
          <li>Opportunity to make a positive impact</li>
          <li>Professional growth and development opportunities</li>
        </ul>
      </div>
    </div>
  );
};

// export default JobCard
