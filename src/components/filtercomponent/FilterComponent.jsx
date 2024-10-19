import React, { useState, useEffect } from 'react';
import './FilterComponent.css';
import { IoMdRefresh } from "react-icons/io";
import { FaListUl } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import { RxLapTimer } from "react-icons/rx";
import { IoLocation } from "react-icons/io5";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { TbMilitaryRank } from "react-icons/tb";

export const FilterComponent = ({ getQueryFromFilter }) => {
  const [isCategoryOpen, setCategoryOpen] = useState(false);
  const [isWorkingModeOpen, setWorkingModeOpen] = useState(false);
  const [isJobEngagementOpen, setJobEngagementOpen] = useState(false);
  const [isLocationOpen, setLocationOpen] = useState(false);
  const [isCompanyOpen, setCompanyOpen] = useState(false);
  const [isPositionOpen, setPositionOpen] = useState(false);


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

      case 'working_mode':
        setWorkingModeOpen(!isWorkingModeOpen);
        setCategoryOpen(false);
        setJobEngagementOpen(false);
        setLocationOpen(false);
        setCompanyOpen(false);
        setPositionOpen(false);
        break;

      case 'engagement':
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
        break;

      default:
        break;
    }
  };

  const [filters, setFilters] = useState({
    category: [],
    position: [],
    working_mode: [],
    engagement: [],
    location: "",
    company: ""
  });

  const resetFilters = () => {
    setFilters({
      category: [],
      position: [],
      working_mode: [],
      engagement: [],
      location: "",
      company: ""
    });
  };

  const handleCheckboxChange = (section, value) => {
    setFilters(prevFilters => {
      const updatedValues = prevFilters[section].includes(value)
        ? prevFilters[section].filter(item => item !== value)
        : [...prevFilters[section], value];

      return {
        ...prevFilters,
        [section]: updatedValues
      };
    });
  };

  const handleSelectChange = (section, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [section]: value
    }));
  };


  useEffect(() => {
    const makeQuery = () => {
      try {
        let query = [];

        if (filters.category.length) query.push(`category=${filters.category.join(',')}`);
        if (filters.position.length) query.push(`position=${filters.position.join(',')}`);
        if (filters.working_mode.length) query.push(`working_mode=${filters.working_mode.join(',')}`);
        if (filters.engagement.length) query.push(`engagement=${filters.engagement.join(',')}`);
        if (filters.location) query.push(`location=${filters.location}`);
        if (filters.company) query.push(`company=${filters.company}`);

        const finalQuery = query.join('&');

        getQueryFromFilter(finalQuery);
        console.log(finalQuery);

      } catch (error) {
        console.error('Error making query:', error);
      }
    };


    makeQuery();
  }, [filters]);

  return (
    <div className="filter-card">
      <div className="filter-header">
        <span>Filter</span>
        <button className="reset-button" onClick={resetFilters}>
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
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('category', 'Technical Writing')}
                checked={filters.category.includes('Technical Writing')} />

              Technical Writing</label>

            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('category', 'Software Engineering')}
                checked={filters.category.includes('Software Engineering')}
              />
              Software Engineering</label>
          </div>
        )}
      </div>

      <div className="filter-section">
        <div className="filter-criteria" onClick={() => toggleSection('position')}>
          <TbMilitaryRank /> <h3>Job Position</h3>
        </div>
        {isPositionOpen && (
          <div className="filter-options">
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('position', 'Frontend Developer')}
                checked={filters.position.includes('Frontend Developer')}
              /> Frontend Developer
            </label>
            <label>
              <input type="checkbox"
                onChange={() => handleCheckboxChange('position', 'Blockchain Developer')}
                checked={filters.position.includes('Blockchain Developer')}
              />Blockchain Developer</label>
          </div>
        )}
      </div>

      {/* Working Mode Section */}
      <div className="filter-section">
        <div className="filter-criteria" onClick={() => toggleSection('working_mode')}>
          <FaSearchLocation /><h3>Working Mode</h3>
        </div>
        {isWorkingModeOpen && (
          <div className="filter-options">
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('working_mode', 'Onsite')}
                checked={filters.working_mode.includes('Onsite')}
              />  Onsite</label>

            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('working_mode', 'Online')}
                checked={filters.working_mode.includes('Online')}
              />  Online</label>

            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('working_mode', 'Hybrid')}
                checked={filters.working_mode.includes('Hybrid')}
              />  Hybrid</label>

            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('working_mode', 'Remote')}
                checked={filters.working_mode.includes('Remote')}
              />  Remote</label>

          </div>
        )}
      </div>

      {/* Job Engagement Section */}
      <div className="filter-section">
        <div className="filter-criteria" onClick={() => toggleSection('engagement')}>
          <RxLapTimer /><h3>Job Engagement</h3>
        </div>
        {isJobEngagementOpen && (
          <div className="filter-options">
            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('engagement', 'Part-time')}
                checked={filters.engagement.includes('Part-time')}
              />  Part Time
            </label>

            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('engagement', 'Full-time')}
                checked={filters.engagement.includes('Full-time')}
              /> Full Time
            </label>

            <label>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange('engagement', 'Contract')}
                checked={filters.engagement.includes('Contract')}
              /> Contract
            </label>
          </div>
        )}
      </div>

      {/* Location Section */}
      <div className="filter-section">
        <div className="filter-criteria" onClick={() => toggleSection('location')}>
          <IoLocation />  <h3>Location</h3>
        </div>

        {isLocationOpen && (
          <select
            className="filter-select"
            value={filters.location}
            onChange={(e) => handleSelectChange('location', e.target.value)}
          >
            <option value="" >Select a location</option>
            <option value="Colombo">Colombo</option>
            <option value="Galle">Galle</option>
            <option value="Chicago">Chicago</option>
          </select>
        )}

      </div>

      <div className="filter-section">
        <div className="filter-criteria" onClick={() => toggleSection('company')}>
          <HiMiniBuildingOffice2 />  <h3>Company</h3>
        </div>

        {isCompanyOpen && (
          <select
            className="filter-select"
            value={filters.company}
            onChange={(e) => handleSelectChange('company', e.target.value)}
          >
            <option value="" >Select a company</option>
            <option value="TechCore">TechCore</option>
            <option value="FrontEndTech">FrontEndTech</option>
            <option value="SEOPros">SEOPros</option>
          </select>
        )}

      </div>
    </div>
  );
};


