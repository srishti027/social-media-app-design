import './topbar.css';
import React, { useState } from 'react';

export default function Topbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const Imgdropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    console.log('Button clicked!');
  };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">ConnectWave</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <i className="fa-solid fa-magnifying-glass searchglass"></i>
          <input placeholder="Enter a person, location, or job" className="search" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">
            <b>Homepage</b>
          </span>
          <span className="topbarLink">
          
              <b>Timeline</b>
         
          </span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <i className="fa-solid fa-1.8x fa-user zoom"></i>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <i className="fa-brands fa-1.5x fa-rocketchat zoom"></i>
            <span className="topbarIconBadge">4</span>
          </div>
          <div className="topbarIconItem">
            <i className="fa-solid fa-1.5x fa-bell zoom"></i>
            <span className="topbarIconBadge">2</span>
          </div>
        </div>
        <img src="/assets/people/h.jpg" alt="" className="topbarImg" onClick={Imgdropdown} />
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {/* Content for the button */}
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><a className="dropdown-item" href="#">Timeline</a></li>
            <li><a className="dropdown-item" href="#">Log out</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
