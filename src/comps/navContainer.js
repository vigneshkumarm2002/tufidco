// Sidebar.js
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Home.css";

const NavBar = ({showSideBar,setShowSideBar}) => {
  console.log("sidebar",showSideBar)
  const data = [
    {
      name: "Dashboard",
      icon: "speed",
      link: "/dashboard"
    },
    {
      name: "Setup",
      icon: "settings",
      link: "/setup",
      subNavs: [
        { name: "Master Data", link: "/setup/master-data" },
        { name: "SOR", link: "/setup/sor" },
        { name: "Non SOR", link: "/setup/non-sor" },
        { name: "Vendor Master", link: "/setup/vendor-master" }
      ],
    },
    {
      name: "Implementing Agency Details",
      icon: "badge",
      link: "/implementing-agency",
      subNavs: [
        { name: "Municipal Corporation", link: "/implementing-agency/municipal-corporation" },
        { name: "Municipality", link: "/implementing-agency/municipality" },
        { name: "Town Panchayat", link: "/implementing-agency/town-panchayat" },
        { name: "Water Board", link: "/implementing-agency/water-board" }
      ],
    },
    {
      name: "Finance",
      icon: "finance",
      link: "/finance",
      subNavs: [
        { name: "Scheme Opening Balance", link: "/finance/scheme-opening-balance" },
        { name: "Scheme Money Received", link: "/finance/scheme-money-received" },
        { name: "Scheme Financial Position", link: "/finance/scheme-financial-position" },
        { name: "Project Opening Balance", link: "/finance/project-opening-balance" },
        { name: "Project Fund Allocation", link: "/finance/project-fund-allocation" },
        { name: "Project Financial Position", link: "/finance/project-financial-position" },
        { name: "Allocation and Expenditure", link: "/finance/allocation-and-expenditure" },
        { name: "Financial Progress", link: "/finance/financial-progress" },
        { name: "Financial Progress List", link: "/finance/financial-progress-list" },
        { name: "Budget Provision", link: "/finance/budget-provision" },
        { name: "Finance Report", link: "/finance/finance-report" }
      ],
    },
    {
      name: "Post Sanction",
      icon: "inventory",
      link: "/post-sanction",
      subNavs: [
        { name: "Pre Sanction", link: "/post-sanction/pre-sanction" },
        { name: "Project Sanction", link: "/post-sanction/project-sanction" }
      ],
    },
    {
      name: "Administration Sanction",
      icon: "upload_file",
      link: "/administration-sanction",
      subNavs: [
        { name: "File Upload", link: "/administration-sanction/file-upload" },
        { name: "File List", link: "/administration-sanction/file-list" }
      ]
    },
    {
      name: "Contractor",
      icon: "engineering",
      link: "/contractor"
    },
    {
      name: "Architect",
      icon: "architecture",
      link: "/architect"
    },
    {
      name: "Supplier",
      icon: "inventory",
      link: "/supplier"
    },
    {
      name: "Project",
      icon: "workspaces",
      link: "/projects"
    },
    {
      name: "Gantt Chart",
      icon: "analytics",
      link: "/gantt-chart"
    },
    {
      name: "Physical Progress",
      icon: "clock_loader_10",
      link: "/physical-progress",
      subNavs: [
        { name: "Physical Progress Updation", link: "/physical-progress/progress-updation" }
      ],
    },
    {
      name: "Invoice",
      icon: "article",
      link: "/invoice"
    },
    {
      name: "Demand",
      icon: "groups",
      link: "/demand"
    },
    {
      name: "Issue",
      icon: "report",
      link: "/issue"
    },
    {
      name: "Attendance",
      icon: "check_circle",
      link: "/attendance"
    },
    {
      name: "Circular",
      icon: "message",
      link: "/circular"
    },
    {
      name: "Format",
      icon: "bookmark",
      link: "/format"
    },
    {
      name: "Report",
      icon: "save",
      link: "/report"
    },
    {
      name: "User Profile",
      icon: "person",
      link: "/user-profile",
      subNavs: [
        { name: "Users", link: "/user-profile/users" },
        { name: "Log Out", link: "/login" },
      ],
    },
  ];
  
  const location = useLocation();
  

  const [selectedNavItem, setSelectedNavItem] = useState(0); // Set to 0 initially
  const [selectedSubNavItem, setSelectedSubNavItem] = useState(null); // Add state for selected subnav item
  const [hoveredIndex,setHoveredIndex]=useState(null)
 

  const [toggleStates, setToggleStates] = useState(data.map(() => false));

  const handleSubNavItemClick = (subIndex) => {
    setSelectedSubNavItem(subIndex);
  };

  const handleNavItemClick = (index) => {
    const newToggleStates = toggleStates.map((state, i) => (i === index ? !state : false));
    setToggleStates(newToggleStates);

    setSelectedNavItem(index);

    if (selectedNavItem !== index) {
      setSelectedSubNavItem(null);
    }
  };

  useEffect(() => {
    setShowSideBar(false)
    // Find the index of the selected main navigation item based on the URL
    const activeIndex = data.findIndex((item) => location.pathname.includes(item.link));
    setSelectedNavItem(activeIndex >= 0 ? activeIndex : 0);

    // Find the index of the selected sub-navigation item based on the URL
    const activeSubIndex =
      activeIndex >= 0 &&
      data[activeIndex]?.subNavs?.findIndex((subItem) => location.pathname === subItem.link);
    setSelectedSubNavItem(activeSubIndex >= 0 ? activeSubIndex : null);
  }, [location.pathname]);

  return (
    <div className={`sidebar ${showSideBar ? "sidebarActive" : ""}`} >
      {data.map((item, index) => (
        <div
          key={index}
          className={`nav-item ${selectedNavItem === index ? "active-bx" : ""}`}
        >
          {selectedNavItem === index && <div className="active-box"></div>}

          <div
            className="nav-item-header"
            onClick={() => handleNavItemClick(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
           {hoveredIndex == index && <div className="nav-border"></div>}
            {!item.subNavs ? (
              <Link to={item.link} key={index}>
                <div className="alignMenu">
                  <span
                    className={`material-symbols-rounded ${
                      selectedNavItem === index ? "active" : ""
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span
                    className={`nav-text ${
                      toggleStates[index] ? "active" : ""
                    }`}
                  >
                    {item.name}
                  </span>
                </div>
              </Link>
            ) : (
              <div className="alignMenu">
                <span
                  className={`material-symbols-rounded ${
                    selectedNavItem === index ? "active" : ""
                  }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`nav-text ${
                    selectedNavItem === index ? "active" : ""
                  }`}
                >
                  {item.name}
                </span>
              </div>
            )}
            {item.subNavs && (
              <span
                className={`material-symbols-rounded toggle-button ${
                  toggleStates[index] ? "active" : ""
                }`}
              >
                {toggleStates[index] ? "expand_less" : "expand_more"}
              </span>
            )}
          </div>

          {selectedNavItem === index && toggleStates[index] && item.subNavs && (
            <div className="subnav-container">
              {item.subNavs.map((subNavItem, subIndex) => (
                <Link to={subNavItem.link} key={subIndex}>
                  <div
                    className={`subnav-item ${
                      selectedSubNavItem === subIndex ? "active-subnav" : ""
                    }`}
                    onClick={() => handleSubNavItemClick(subIndex)}
                  >
                    <p>{subNavItem.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavBar;