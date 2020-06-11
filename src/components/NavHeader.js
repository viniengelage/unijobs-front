import React from 'react';

import './NavHeader.css'

const NavHeader = ({leftMenu, rightMenu}) => {

  
  const leftList = leftMenu.map( (option, index) => {
    return (
      <li key={index}><a href="#/" alt="nav" >{option}</a></li>
    )
  });

  const rightList = rightMenu.map( (option, index) => {
    return (
      <li key={index}><a href="#/" alt="nav" >{option}</a></li>
    )
  });

  return (
    <nav className="nav-header">
      <div className="container flex">
          <ul className="flex">
            { leftList}
          </ul>
          <ul className="flex">
            { rightList }
          </ul>
      </div>
    </nav>
  );
}

export default NavHeader;