import React, { useState } from "react";
import "./Home.css";
import Logo from "./../assets/logo.png";
import { useNavigate } from "react-router-dom";

import userPicture from "./../assets/avatar.jpg";


const Header = ({ showSideBar, setShowSideBar }) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    navigate("/login");
  };
  const handleMenu = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <div className="header">
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <span
          onClick={handleMenu}
          style={{ color: "white" }}
          className="material-symbols-rounded togglemenu"
        >
          {" "}
          {showSideBar ? "close" : "menu"}
        </span>

        <div className="logoImg">
          <img src={Logo} alt="logo" />
        </div>
      </div>
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
  );
};

export default Header;
