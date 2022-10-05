import React from 'react'

import "../App.css";
import { SidebarData } from './SidebarData';

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <ul className='SidebarList'>
        {SidebarData.map((val,key) => {
          return (
            <li
              key = {key}
              className="row"
              onClick={() => {
                window.location.pathname = val.page;
              }}
            >
              <div id = "icon">{val.icon}</div>
              <div id = "title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar