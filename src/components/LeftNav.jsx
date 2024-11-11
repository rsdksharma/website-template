/**
 * Copyright (c) ULOK Technologies. All rights reserved.
 */
import React, { useState } from 'react';
import '../styles/left-nav.css';

const LeftNav = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [buttonExpanded, setButtonExpanded] = useState(true);
  const handleMouseEnter = () => {
    setButtonExpanded(true);
  };

  const handleMouseLeave = () => {
    setButtonExpanded(false);
  };

  const handleExpandButtonClick = () => {
    setButtonExpanded(!buttonExpanded);
    setIsExpanded(!isExpanded);
  };


  return (
    <div className="left-nav" 
      style={{
        width: isExpanded || buttonExpanded ? '15rem' : '1.75rem',
        transition: 'width 0.3s ease'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='expand-collapse-div'>
        <span className='expand-collapse-button' 
          onClick={handleExpandButtonClick}>
          {isExpanded ? '<' : '>'}
        </span>
      </div>
      <span style={{borderTop: 'solid lightgrey'}}></span>
      <div className='nav-content' 
        style={{
          visibility: isExpanded || buttonExpanded ? 'visible' : 'hidden'
        }}
      >
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default LeftNav;