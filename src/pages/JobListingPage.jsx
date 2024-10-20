import React, { useState, useEffect } from 'react';
import './css/JobListingPage.css'
import { FilterComponent } from '../components/filtercomponent/FilterComponent';
import { JobCard } from '../components/jobcard/JobCard';
import Loading from '../components/Loading/Loading';
import { ChatBox } from '../components/ChatBox/ChatBox';

const JobListingPage = () => {
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [chatBox, setChatBox] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState("");

  const textAreaQuery = (query) => {
    setTextAreaValue(query);
  }

  const getQuery = (query) => {
    setQuery(query);
  };


  useEffect(() => {

    const fetchJobs = async () => {
      try {
        if (!chatBox) {
          const response = await fetch(`http://localhost:9090/api/jobs?${query}`);
          const data1 = await response.json();
          setJobs(data1);
        }

        if (chatBox) {

          console.log("textAreaValue", textAreaValue);

          const response = await fetch("http://localhost:9090/api/queryJobs", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: textAreaValue })
          });
          const data2 = await response.json();
          setJobs(data2);
        }

      } catch (error) {
        console.log("failed to fetch jobs :", error);
      }
      finally {
        setLoading(false);
      }

    };

    fetchJobs();
  }, [query,textAreaValue]);

  if (loading) {
    return <Loading />;
  }

  const toggle = () => {
    setChatBox(!chatBox);
  }

  return (
    <div className="job-listing-page">

      <div className="sidebar-container-filter">
        {chatBox ? <ChatBox getTextQuery={textAreaQuery} /> : <FilterComponent getQueryFromFilter={getQuery} />}
        <button type="button" onClick={toggle}>{chatBox ? "FilterBox" : "ChatBox"}</button>
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
