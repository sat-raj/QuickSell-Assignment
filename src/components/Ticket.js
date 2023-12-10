import React, { useState, useEffect } from 'react';
import { FcHighPriority, FcLowPriority , FcMediumPriority, FcCancel, FcOk, FcBarChart, FcTodoList, FcExpired} from 'react-icons/fc';
import { FaRegFaceDizzy, FaRegFaceFlushed, FaRegFaceGrinHearts, FaRegFaceGrinTongueWink, FaRegFaceMehBlank} from "react-icons/fa6"; 
import { TbUrgent, TbLineDashed  } from "react-icons/tb";
import ApiService from './ApiService';
import './css/ticket.css';

function Ticket({filterKey, ticket }) {
  const { id, title, status, tag, userId, priority } = ticket;
  const [assignedUser, setAssignedUser] = useState('');
  console.log("status",filterKey)
  useEffect(() => {
    async function fetchUserData() {
      try {
        const usersData = await ApiService.getUsersData();
        const user = usersData.find(user => user.id === userId);

        if (user) {
          setAssignedUser(user.id);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchUserData();
  }, [userId]);

  const priorityIcons = {
    4: <TbUrgent />, // Urgent
    3: <FcHighPriority />, // High
    2: <FcMediumPriority />, // Medium
    1: <FcLowPriority />, // Low
    0: <TbLineDashed  />, // No priority
  };
  const statusIcons = {
    'Done': <FcOk />, // Done status icon
    'Todo': <FcTodoList />, // Todo status icon
    'Backlog': <FcExpired />, // Backlog status icon
    'Canceled': <FcCancel />, // Canceled status icon
    'In progress': <FcBarChart />, // In progress status icon
  };

  const priorityLabels = {
    4: 'Urgent',
    3: 'High',
    2: 'Medium',
    1: 'Low',
    0: 'No priority',
  };
  const userIcons = {
    'usr-1': <FaRegFaceDizzy />,      // Associate user ID 1 with FcUser icon
     'usr-2': <FaRegFaceFlushed />, // Associate user ID 2 with FcBusinessman icon
    'usr-3': <FaRegFaceGrinHearts  />, 
     'usr-4':<FaRegFaceGrinTongueWink  />,
    'usr-5':<FaRegFaceMehBlank  />  // Associate user ID 3 with FcManager icon
     // Add more user ID to icon mappings as needed
   };

   // Function to set gradient colors based on filterKey value
function setGradientColor(filterKey) {
  let gradientColor;
  switch (filterKey) {
    case 1:
      gradientColor = "linear-gradient(to bottom right, #ffffff, #cfe7fa)"; // White to blue
      break;
    case 2:
      gradientColor = "linear-gradient(to bottom right, #ffffff, #ffcccc)"; // White to red
      break;
    case 3:
      gradientColor = "linear-gradient(to bottom right, #ffffff, #e6e6fa)"; // White to purple
      break;
    default:
      gradientColor = "linear-gradient(to bottom right, #ffffff, #0000ff)"; // Default to blue
  }
  return gradientColor;
}

// Get all elements with class 'ticket-card'
const ticketCards = document.querySelectorAll('.ticket-card');

// Loop through each card and set gradient based on data-filter-key attribute
ticketCards.forEach(card => {
  const filterKey = parseInt(card.getAttribute('data-filter-key'));
  const gradient = setGradientColor(filterKey);
  card.style.backgroundImage = gradient;
});

  return (
    <div className="ticket-card" data-filter-key={filterKey}>
      <div className="ticket">
        <div className="ticket-header">
          <span className="ticket-id">{id}</span>
          { !(filterKey ===2) && 
          (<span className="ticket-info">
             {userIcons[assignedUser]}
          </span>
        
        )}
        </div>
        <div className="ticket-details">
        
        { !(filterKey ===1) && (<span className="ticket-status">{statusIcons[status]}</span>)}
          <span  className="ticket-title">{title}</span>
          </div>
          <div className="ticket-bottom">
          { !(filterKey ===3) && (  <span className="ticket-priority">{priorityIcons[priority]}</span>)}
            <span className="ticket-tag">{tag[0]}</span>
           
          
        </div>
      </div>
    </div>
  );
}

export default Ticket;
