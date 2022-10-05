import React from 'react'

import "../App.css";
// import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <ul className='SidebarList'>
        {SidebarData.map((item) => {
          return (
            <li
              key = {item.id}
              className="row"
              onClick={() => {
                window.location.pathname = item.path;
                // <Link to={item.path}></Link>
              }}
            >
              <div id = "icon">{item.icon}</div>
              <div id = "title">{item.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar