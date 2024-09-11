import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/content.css';
import { BiCalendar, BiParty, BiEdit } from "react-icons/bi"; // Import the new icon
//test
//test 2

const course = [
  {
    title: "Attendance",
    icon: <BiCalendar className="card-icon" />,
  },
  {
    title: "Event",
    icon: <BiParty className='card-icon' /> // Updated icon
  },
  {
    title: "About you",
    icon: <BiEdit className="card-icon" />, // Added a different icon to the card
    path: "/personal-details", // Path for Fill Your Form card
  },
];

const Card = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleClick = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <div className="card--container">
      {course.map((item, index) => (
        <div 
          className="card" 
          key={index}
          onClick={() => handleClick(item.path)} // Handle card click
        >
          <div className="card--cover">{item.icon}</div>
          <div className="card--title">
            <h2>{item.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
