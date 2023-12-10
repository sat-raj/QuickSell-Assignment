// Prority.js
import { FcHighPriority, FcLowPriority , FcMediumPriority} from 'react-icons/fc';
import { TbUrgent, TbLineDashed  } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import React, { useEffect } from 'react';
import './css/status.css'
import Ticket from './Ticket';
function Priority({ tickets }) {

    const filterKey=3;
    console.log("hhh",tickets)
  const sections = {
   
    noPriority: tickets.filter(ticket => ticket.priority === 0),
    urgent: tickets.filter(ticket => ticket.priority === 4),
    high: tickets.filter(ticket => ticket.priority === 3),
    medium: tickets.filter(ticket => ticket.priority === 2),
    low: tickets.filter(ticket => ticket.priority === 1),
  };

  const ticketCount = {
    noPriority: sections.noPriority.length,
    urgent: sections.urgent.length,
    high: sections.high.length,
    medium: sections.medium.length,
    low: sections.low.length,
  };
  useEffect(() => {
    // Use useEffect to apply the transition effect when the component mounts
    const tickets = document.querySelectorAll('.ticket');
    tickets.forEach((ticket, index) => {
      setTimeout(() => {
        ticket.classList.add('show');
      }, index * 100); // Adjust the delay between each ticket being shown
    });
  }, []);

  return (
    <div className="search-component">
       <div className="section">
      <div className='sectionHeader'>
      <div className='sectionTitleIcon'>
        <span className="sectionTitle"><TbLineDashed/> No priority</span> {ticketCount.noPriority}
        </div>
        <div className='sectionTitleButtons'>
            <button><FaPlus/></button>
            <button><TbLineDashed/></button>
      </div> </div>
        {sections.noPriority.map(ticket => (
          <Ticket filterKey={filterKey} ticket={ticket} />
        ))}
      </div>
       <div className="section">
      <div className='sectionHeader'>
      <div className='sectionTitleIcon'>
        <span className="sectionTitle"><TbUrgent/> Urgent</span> {ticketCount.urgent}
        </div>
        <div className='sectionTitleButtons'>
            <button><FaPlus/></button>
            <button><TbLineDashed/></button>
      </div> </div>
        {sections.urgent.map(ticket => (
            <Ticket filterKey={filterKey} ticket={ticket} />
        ))}
      </div>
       <div className="section">
      <div className='sectionHeader'>
      <div className='sectionTitleIcon'>
        <span className="sectionTitle"><FcHighPriority/> High</span> {ticketCount.high}
        </div>
        <div className='sectionTitleButtons'>
            <button><FaPlus/></button>
            <button><TbLineDashed/></button>
      </div> </div>
        {sections.high.map(ticket => (
            <Ticket filterKey={filterKey} ticket={ticket} />
        ))}
      </div>
       <div className="section">
      <div className='sectionHeader'>
      <div className='sectionTitleIcon'>
        <span className="sectionTitle"><FcMediumPriority/> Medium</span> {ticketCount.medium}
        </div>
        <div className='sectionTitleButtons'>
            <button><FaPlus/></button>
            <button><TbLineDashed/></button>
      </div> </div>
        {sections.medium.map(ticket => (
            <Ticket filterKey={filterKey} ticket={ticket} />
        ))}
      </div>
       <div className="section">
      <div className='sectionHeader'>
      <div className='sectionTitleIcon'>
        <span className="sectionTitle"><FcLowPriority/> Low</span> {ticketCount.low}
        </div>
        <div className='sectionTitleButtons'>
            <button><FaPlus/></button>
            <button><TbLineDashed/></button>
      </div> </div>
        {sections.low.map(ticket => (
            <Ticket filterKey={filterKey} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}

export default Priority;
