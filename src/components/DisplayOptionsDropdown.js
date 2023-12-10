// DisplayOptionsDropdown.js
import React, { useState } from 'react';
import './css/DisplayOptionsModal.css';
import { HiAdjustments, HiChevronDown } from "react-icons/hi";
const DisplayOptionsDropdown = ({ handleGroupingChange, handleOrderingChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [groupingOption, setGroupingOption] = useState('By Status');
  const [orderingOption, setOrderingOption] = useState('Priority');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleGroupingOptionChange = (event) => {
    const selectedValue = event.target.value;
    setGroupingOption(selectedValue);
    handleGroupingChange(selectedValue);
  };

  const handleOrderingOptionChange = (event) => {
    const selectedValue = event.target.value;
    setOrderingOption(selectedValue);
    handleOrderingChange(selectedValue);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown">
        <button className="dropdown-button" onClick={toggleDropdown}>
        <HiAdjustments /> 
        <div className="dropdown-button-title">
        Display
        </div>
        <HiChevronDown />
        </button>
        {isOpen && (
          <div className="dropdown-content">
            <div className="filter-options">
              <div className="filter-name">Grouping  </div>
              <div className="filter-values">
                <div className="custom-select">
                  <select value={groupingOption} onChange={handleGroupingOptionChange}>
                    <option value="By Status">Status</option>
                    <option value="By User">User</option>
                    <option value="By Priority">Priority</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="filter-options">
              <div className="filter-name">Ordering</div>
              <div className="filter-values">
                <div className="custom-select">
                  <select value={orderingOption} onChange={handleOrderingOptionChange}>
                    <option value="Priority">Priority</option>
                    <option value="Title">Title</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayOptionsDropdown;
