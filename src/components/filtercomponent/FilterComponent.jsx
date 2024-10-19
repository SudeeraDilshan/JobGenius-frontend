import React, { useState,useEffect } from 'react';
import './FilterComponent.css';
import { IoMdRefresh } from "react-icons/io";
import { FaListUl } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import { RxLapTimer } from "react-icons/rx";
import { IoLocation } from "react-icons/io5";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { TbMilitaryRank } from "react-icons/tb";

export const FilterComponent = () => {
  const [isCategoryOpen, setCategoryOpen] = useState(false);
  const [isWorkingModeOpen, setWorkingModeOpen] = useState(false);
  const [isJobEngagementOpen, setJobEngagementOpen] = useState(false);
  const [isLocationOpen, setLocationOpen] = useState(false);
  const [isCompanyOpen, setCompanyOpen] = useState(false);
  const [isPositionOpen, setPositionOpen] = useState(false);
  const [AllFields,setAllFields] = useState({});
  const [loading, setLoading] = useState(true);

  const toggleSection = (section) => {
    switch (section) {
      case 'category':
        setCategoryOpen(!isCategoryOpen);
        setWorkingModeOpen(false);
        setJobEngagementOpen(false);
        setLocationOpen(false);
        setCompanyOpen(false);
        setPositionOpen(false);
        
        break;
      case 'workingMode':
        setWorkingModeOpen(!isWorkingModeOpen);
        setCategoryOpen(false);
        setJobEngagementOpen(false);
        setLocationOpen(false);
        setCompanyOpen(false);
        setPositionOpen(false);
        break;
      case 'jobEngagement':
        setJobEngagementOpen(!isJobEngagementOpen);
        setCategoryOpen(false);
        setWorkingModeOpen(false);
        setLocationOpen(false);
        setCompanyOpen(false);
        setPositionOpen(false);
        break;
      case 'location':
        setLocationOpen(!isLocationOpen);
        setCategoryOpen(false);
        setWorkingModeOpen(false);
        setJobEngagementOpen(false);
        setCompanyOpen(false);
        setPositionOpen(false);
        break;
      case 'company':
        setCompanyOpen(!isCompanyOpen);
        setCategoryOpen(false);
        setWorkingModeOpen(false);
        setJobEngagementOpen(false);
        setLocationOpen(false);
        setPositionOpen(false);
        break;
      case 'position':
        setPositionOpen(!isPositionOpen);
        setCategoryOpen(false);
        setWorkingModeOpen(false);
        setJobEngagementOpen(false);
        setLocationOpen(false);
        setCompanyOpen(false);
      default:
        break;
    }
  };

  useEffect(() => {
    const fetchAllFieldValues = async () => {
      try {
        const response = await fetch('http://localhost:9090/api/getAllFields');
        const data = await response.json();
        setAllFields(data); // Set the fetched jobs into state
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setLoading(false);
      }
    };
    fetchAllFieldValues();
  }, []);

  if (loading) {
    return <p>Loading jobs...</p>;
  }

  return (
    <div className="filter-card">
      <div className="filter-header">
        <span>Filter</span>
        <button className="reset-button">
          <IoMdRefresh />
        </button>
      </div>

      {/* Job Category Section */}
      <div className="filter-section">
        <div className="filter-criteria" onClick={() => toggleSection('category')}>
          <FaListUl /> <h3>Job Category</h3>
        </div>
        {isCategoryOpen && (
          <div className="filter-options">
            <label><input type="checkbox" /> Technical Writing</label>
            <label><input type="checkbox" />Software Engineering</label>
          </div>
        )}
      </div>

      <div className="filter-section">
        <div className="filter-criteria" onClick={() => toggleSection('position')}>
          <TbMilitaryRank /> <h3>Job Position</h3>
        </div>
        {isPositionOpen && (
          <div className="filter-options">
            <label><input type="checkbox" /> Frontend Developer</label>
            <label><input type="checkbox" />Blockchain Developer</label>
          </div>
        )}
      </div>

      {/* Working Mode Section */}
      <div className="filter-section">
        <div className="filter-criteria" onClick={() => toggleSection('workingMode')}>
          <FaSearchLocation /><h3>Working Mode</h3>
        </div>
        {isWorkingModeOpen && (
          <div className="filter-options">
            <label><input type="checkbox" /> Onsite</label>
            <label><input type="checkbox" /> Online</label>
            <label><input type="checkbox" /> Hybrid</label>
          </div>
        )}
      </div>

      {/* Job Engagement Section */}
      <div className="filter-section">
        <div className="filter-criteria" onClick={() => toggleSection('jobEngagement')}>
          <RxLapTimer /><h3>Job Engagement</h3>
        </div>
        {isJobEngagementOpen && (
          <div className="filter-options">
            <label><input type="checkbox" /> Part Time</label>
            <label><input type="checkbox" /> Full Time</label>
          </div>
        )}
      </div>

      {/* Location Section */}
      <div className="filter-section">
        <div className="filter-criteria" onClick={() => toggleSection('location')}>
          <IoLocation />  <h3>Location</h3>
        </div>
        {isLocationOpen && (
          <select className="filter-select" defaultValue="">
            <option value="" disabled>Select a location</option>
            <option value="techcore">Colombo</option>
            <option value="cloudmatrix">Galle</option>
            <option value="appsmiths">trinco</option>
          </select>
        )}
      </div>

      <div className="filter-section">
        <div className="filter-criteria" onClick={() => toggleSection('company')}>
          <HiMiniBuildingOffice2 />  <h3>Company</h3>
        </div>
        {isCompanyOpen && (
          <select className="filter-select" defaultValue="">
            <option value="" disabled>Select a company</option>
            <option value="techcore">TechCore</option>
            <option value="cloudmatrix">CloudMatrix</option>
            <option value="appsmiths">AppSmiths</option>
          </select>
        )}
      </div>
    </div>
  );
};

// export default FilterComponent;
