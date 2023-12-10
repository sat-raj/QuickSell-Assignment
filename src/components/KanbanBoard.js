// KanbanBoard.js
import React, { useState, useEffect } from 'react';
import ApiService from './ApiService';
import Status from './Status';
import User from './User';
import Priority from './Priority';
import DisplayOptionsDropdown from './DisplayOptionsDropdown';

function KanbanBoard() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedGrouping, setSelectedGrouping] = useState('By Status');
  const [selectedOrdering, setSelectedOrdering] = useState('Priority');

  useEffect(() => {
    async function fetchTicketData() {
      try {
        const ticketData = await ApiService.getTicketData();
        setTickets(ticketData);
      } catch (error) {
        console.error('Error fetching ticket data:', error);
      }
    }

    fetchTicketData();
  }, []);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const userData = await ApiService.getUsersData();
        setUsers(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchUserData();
  }, []);

  const handleGroupingChange = (selectedValue) => {
    setSelectedGrouping(selectedValue);
  };

  const handleOrderingChange = (selectedValue) => {
    setSelectedOrdering(selectedValue);
    sortTickets(selectedValue);
  };

  const sortTickets = (selectedValue) => {
    let sortedTickets = [...tickets];
    if (selectedValue === 'Priority') {
      sortedTickets.sort((a, b) => b.priority - a.priority);
    } else if (selectedValue === 'Title') {
      sortedTickets.sort((a, b) => a.title.localeCompare(b.title));
    }
    setTickets(sortedTickets);
  };

  return (
    <div className="kanban-board">
      <div className="display-options">
        <DisplayOptionsDropdown
          handleGroupingChange={handleGroupingChange}
          handleOrderingChange={handleOrderingChange}
        />
      </div>
      <div className="tickets-container">
        {selectedGrouping === 'By Status' && (
          <Status tickets={tickets} />
        )}
        {selectedGrouping === 'By User' && (
          <User tickets={tickets} users={users} />
        )}
        {selectedGrouping === 'By Priority' && (
          <Priority tickets={tickets} />
        )}
      </div>
    </div>
  );
}

export default KanbanBoard;
