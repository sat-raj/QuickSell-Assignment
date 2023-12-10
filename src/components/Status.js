import React, { useEffect } from 'react';
import './css/status.css'
import Ticket from './Ticket';
import { FcCancel, FcOk, FcBarChart, FcTodoList, FcExpired } from 'react-icons/fc';
import { TbLineDashed  } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import ApiService from './ApiService';

function Status({ tickets }) {

  const filterKey = 1;
  const sections = {
    done: tickets.filter(ticket => ticket.status === 'Done'),
    todo: tickets.filter(ticket => ticket.status === 'Todo'),
    backlog: tickets.filter(ticket => ticket.status === 'Backlog'),
    canceled: tickets.filter(ticket => ticket.status === 'Canceled'),
    inProgress: tickets.filter(ticket => ticket.status === 'In progress'),
  };

  const ticketCount = {
    done: sections.done.length,
    todo: sections.todo.length,
    backlog: sections.backlog.length,
    canceled: sections.canceled.length,
    inProgress: sections.inProgress.length,
  };
  useEffect(() => {
    const ticketsToShow = document.querySelectorAll('.ticket');
    ticketsToShow.forEach((ticket, index) => {
      setTimeout(() => {
        ticket.classList.add('show');
      }, index * 100); // Adjust the delay between each ticket being shown
    });
  }, [tickets]); 
  
  return (
    <div className="search-component">
      <div className="section">
      <div className='sectionHeader'>
      <div className='sectionTitleIcon'>
        <span className="sectionTitle" ><FcOk /> Done </span> <span>{ticketCount.done} </span> 
        </div>
        <div className='sectionTitleButtons'>
            <button><FaPlus/></button>
            <button><TbLineDashed/></button>
      
      </div> </div>
        {sections.done.map(ticket => (
          <Ticket filterKey={filterKey} ticket={ticket} />
        ))}
     
      </div>
      <div className="section">
      <div className='sectionHeader'>
      <div className='sectionTitleIcon'>
        <span className="sectionTitle" ><FcTodoList /> Todo </span> {ticketCount.todo}
        </div>
        <div className='sectionTitleButtons'>
            <button><FaPlus/></button>
            <button><TbLineDashed/></button>
      </div> </div>
        {sections.todo.map(ticket => (
          <Ticket filterKey={filterKey} ticket={ticket} />
        ))}
       
      
      </div>
      <div className="section">
      <div className='sectionHeader'>
      <div className='sectionTitleIcon'>
        <span className="sectionTitle" ><FcExpired /> Backlog </span> {ticketCount.backlog}
        </div>
        <div className='sectionTitleButtons'>
            <button><FaPlus/></button>
            <button><TbLineDashed/></button>
      </div>  </div>
        {sections.backlog.map(ticket => (
          <Ticket filterKey={filterKey} ticket={ticket} />
        ))}
       
    
      </div>
      <div className="section">
      <div className='sectionHeader'>
      <div className='sectionTitleIcon'>
        <span className="sectionTitle" ><FcCancel /> Canceled </span> {ticketCount.canceled}
      </div>
      <div className='sectionTitleButtons'>
            <button><FaPlus/></button>
            <button><TbLineDashed/></button>
      </div>  </div>
        {sections.canceled.map(ticket => (
          <Ticket filterKey={filterKey} ticket={ticket} />
        ))}
      
      
    
      </div>
      <div className="section">
      <div className='sectionHeader'>
      <div className='sectionTitleIcon'>
        <span className="sectionTitle" ><FcBarChart /> In Progress </span> {ticketCount.inProgress}
        </div>
        <div className='sectionTitleButtons'>
            <button><FaPlus/></button>
            <button><TbLineDashed/></button>
      </div></div>
        {sections.inProgress.map(ticket => (
          <Ticket filterKey={filterKey} ticket={ticket} />
        ))}
      
      </div>
    </div>
  );
}

export default Status;
