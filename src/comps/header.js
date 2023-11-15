import React,{useState} from 'react'
import "./Home.css";

import userPicture from "./../assets/image.png";
const Header = ({setvalue}) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdownToggle = () => {
      setShowDropdown(!showDropdown);
    };
  
    const handleLogout = () => {
      setvalue(false);
    };
  return (
    <div className="header">
    <h1>NODAL AGENCY</h1>
    <div className="userProfile" onClick={handleDropdownToggle}>
      <div className="userPicture">
        <img src={userPicture} alt="user" />
      </div>
      <p>Payment Maker</p>

      {showDropdown && (
        <div className="user_dropdown">
          <li>Profile</li>
          <li onClick={handleLogout}>Logout</li>
        </div>
      )}
    </div>
  </div>
  )
}

export default Header