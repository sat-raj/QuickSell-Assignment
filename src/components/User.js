import React, { useEffect } from 'react';
import Ticket from './Ticket';
import { FaRegFaceDizzy, FaRegFaceFlushed,FaRegFaceGrinHearts, FaRegFaceGrinTongueWink, FaRegFaceMehBlank, FaPlus} from "react-icons/fa6"; // Import the icons you want to use for users
import { TbLineDashed  } from "react-icons/tb";

function User({ tickets, users }) {
  const filterKey = 2;
  const sections = {};

  useEffect(() => {
    // Use useEffect to apply the transition effect when the component mounts
    const tickets = document.querySelectorAll('.ticket');
    tickets.forEach((ticket, index) => {
      setTimeout(() => {
        ticket.classList.add('show');
      }, index * 100); // Adjust the delay between each ticket being shown
    });
  }, []);

  // Filter tickets for each user
  users.forEach(user => {
    sections[user.id] = tickets.filter(ticket => ticket.userId === user.id);
  });


  // Map each user ID to an icon
  const userIcons = {
   'usr-1': <FaRegFaceDizzy />,      // Associate user ID 1 with FcUser icon
    'usr-2': <FaRegFaceFlushed />, // Associate user ID 2 with FcBusinessman icon
   'usr-3': <FaRegFaceGrinHearts  />, 
    'usr-4':<FaRegFaceGrinTongueWink  />,
   'usr-5':<FaRegFaceMehBlank  />  // Associate user ID 3 with FcManager icon
    // Add more user ID to icon mappings as needed
  };

  return (
    <div className="search-component">
      {users.map(user => (
        <div key={user.id} className="section">
        <div className='sectionHeader'>
      <div className='sectionTitleIcon'>
          <span className="sectionTitle">{userIcons[user.id]} {user.name}  </span> {sections[user.id].length}
          </div>
          <div className='sectionTitleButtons'>
            <button><FaPlus/></button>
            <button><TbLineDashed/></button>
      </div> </div>
          {sections[user.id].map(ticket => (
            <Ticket key={ticket.id} filterKey={filterKey} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default User;
