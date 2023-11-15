import React,{useState} from 'react'
import "./Home.css";
import { useNavigate } from 'react-router-dom';

import userPicture from "./../assets/image.png";
const Header = ({setvalue}) => {
  const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdownToggle = () => {
      setShowDropdown(!showDropdown);
    };
  
    const handleLogout = () => {
      navigate('/login');
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