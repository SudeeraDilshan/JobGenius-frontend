import React from 'react'
import './css/JobPreviewPage.css'
import { useLocation } from 'react-router-dom'


const JobPreviewPage = () => {
    const location = useLocation();
    const { jobData } = location.state; // Access the passed data
  
    return (
        <div className='main-container'>
            <div className="header">
                <img src="Jobmember.png" alt="" />
                <div className="header-info">
                    <h2>{jobData.position}</h2>
                    <div className="tags">
                        <span className="tagonsite">{jobData.working_mode}</span>
                        <span className="tag">{jobData.location}</span>
                    </div>
                </div>
            </div>
            <hr />
            <div className="body">
                <div className="left">
                    <div className="left-details">
                        <div className="job-details">
                            <div className="job-detail">
                                <h3>Job Type</h3>
                                <p>{jobData.engagement}</p>
                            </div>
                            <div className="job-detail">
                                <h3>Experience</h3>
                                <p>{jobData.experience}</p>
                            </div>
                            <div className="job-detail">
                                <h3>Salary</h3>
                                <p>{jobData.salary}</p>
                            </div>
                        </div>
                        <div className="job-offers">
                            <h3>Offers</h3>
                            {/* <ul>
                                <li>Flexible working options</li>
                                <li>Opportunity to make a positive impact</li>
                                <li>Professional growth and development opportunities</li>
                            </ul> */}
                                <ul>
          {jobData.keypoints.split(',').map((perk, index) => (
            <li key={index}>{perk.trim()}</li> // trim() to remove any extra spaces
          ))}</ul>
                        </div>
                        <div className="job-description">
                            <h3>Job Description</h3>
                            <p>{jobData.description}</p>
                        </div>
                    </div>
                </div>
                <div className="right">

                    <div className="right-content">
                        <div className="buttons">
                            <button className="apply-btn">Apply</button>
                            <button className="refer-btn">Refer a friend</button>
                        </div>
                        <div className="employer-info">
                            <h3 className="employer-title">The Employer</h3>
                            <p>
                                Our client is a couple of young passionate minds set forth to form to help you bridge the gap between
                                <strong> “what you are now, what you could be”</strong> and give businesses and entrepreneurs the
                                freedom to take their growth to the next level.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobPreviewPage