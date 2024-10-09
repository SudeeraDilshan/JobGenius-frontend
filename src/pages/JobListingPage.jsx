import React from 'react';
import './css/JobListingPage.css'
import { FilterComponent } from '../components/filtercomponent/FilterComponent';
import { JobCard } from '../components/jobcard/JobCard';

const JobListingPage = () => {
  return (
    <div className="job-listing-page">
      {/* Sidebar */}
      <div className="sidebar-container">
        <FilterComponent />
      </div>

      {/* Job Listings */}
      <div className="job-listings-container">
        <div className="jobs-header">
          <h3>197 Jobs Found</h3>
        </div>
        <div className="scrollable-div">
          <div className="job-cards">
            {/* Rendering multiple job cards */}
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListingPage;
