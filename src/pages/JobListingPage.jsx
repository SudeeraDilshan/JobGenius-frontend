import React, { useState, useEffect } from 'react';
import './css/JobListingPage.css'
import { FilterComponent } from '../components/filtercomponent/FilterComponent';
import { JobCard } from '../components/jobcard/JobCard';

const JobListingPage = () => {
  const [jobs, setJobs] = useState([]); 
  const [query,setQuery] = useState('');
  const [checkedFetched, setCheckedFetched] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const getQuery = (query) => {
    setQuery(query); 
  };

  
  useEffect(() => {

    const fetchJobs = async () => {
     try {
         const response = await fetch(`http://localhost:9090/api/jobs?${query}`);
         const data = await response.json();
         setJobs(data);
      
     } catch (error) {
       console.log("failed to fetch jobs :",error);
     }
     finally {
       setLoading(false);
     }

  };
  fetchJobs();}, [query]);

  if (loading) {
    return <p>Loading jobs...</p>;
  }
  return (
    <div className="job-listing-page">

      <div className="sidebar-container-filter">
        <FilterComponent getQueryFromFilter={getQuery} />
      </div>


      <div className="job-listings-container">
        <div className="jobs-header">
          <h3>{jobs.length} Jobs Found</h3>
        </div>
        <div className="scrollable-div">
          <div className="job-cards">

            {jobs?.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListingPage;
