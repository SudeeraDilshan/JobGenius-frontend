import React from 'react';
import './JobCard.css'; // Import the CSS file
import { HiClock } from "react-icons/hi2";
import { SiLevelsdotfyi } from "react-icons/si";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'

export const JobCard = ({ job }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/job-preview/${job.id}`, {
      state: { jobData: job }, // Pass your data as state
    });
  };

  return (
    <div className="job-card" onClick={handleClick}>
      <div className="job-card-header">
        <div className="job-card-logo">
          <img src="Jobmember.png" alt="Company Logo" className="job-card-logo-img" />
        </div>
        <div className="job-card-info">
          <h3 className="job-card-company">{job.company}</h3>
          <h2 className="job-card-title">{job.position}</h2>
          <div className="job-card-tags">
            <span className="job-card-tag onsite">{job.working_mode}</span>
            <span className="job-card-location">{job.location}</span>
          </div>
        </div>
        <button className="apply-button">
          Apply <span className="arrow">→</span>
        </button>
      </div>
      <div className="job-card-body">
        <div className="job-details">
          <span className="job-detail"> <HiClock /><div>{job.engagement}</div></span>
          <span className="job-detail"><SiLevelsdotfyi />{job.experience}</span>
          <span className="job-detail"><FaMoneyCheckDollar />{job.salary}</span>
        </div>
        <ul className="job-perks">
          {job.keypoints.split(',').map((perk, index) => (
            <li key={index}>{perk.trim()}</li> // trim() to remove any extra spaces
          ))}
        </ul>
      </div>
    </div>
  );
};


