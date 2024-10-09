import React from 'react';
import './FilterComponent.css';
import { IoMdRefresh } from "react-icons/io";
import { FaListUl } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import { RxLapTimer } from "react-icons/rx";
import { IoLocation } from "react-icons/io5";

export const FilterComponent = () => {
  return (
    <div className="filter-card">
      <div className="filter-header">
        <span>Filter</span>
        <button className="reset-button">
          <IoMdRefresh />
        </button>
      </div>

      <div className="filter-section">
        <div className="filter-criteria">
          <FaListUl /> <h3> Job Title</h3>
        </div>
        <div className="filter-input">
          <input type="text" placeholder="Search ..." />
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-criteria">
          <FaSearchLocation /><h3>Location Type</h3>
        </div>
        <div className="filter-options">
          <label><input type="checkbox" defaultChecked /> Onsite</label>
          <label><input type="checkbox" defaultChecked /> Online</label>
          <label><input type="checkbox" defaultChecked /> Hybrid</label>
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-criteria">
          <RxLapTimer /><h3>Job Engagement</h3>
        </div>
        <div className="filter-options">
          <label><input type="checkbox" defaultChecked /> Part Time</label>
          <label><input type="checkbox" defaultChecked /> Full Time</label>
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-criteria">
          <IoLocation />  <h3>Location</h3>
        </div>
        <select className="filter-select">
          <option value="city">city</option>
          <option value="colombo">Colombo</option>
          <option value="kandy">Kandy</option>
        </select>
      </div>
    </div>
  );
};

// export default FilterComponent
