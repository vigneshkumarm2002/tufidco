import React from "react";
import "./VendorMaster.css";
import NavBar from "./navContainer.js";

import Home from "./../assets/dashboardIcon.svg";
import Header from "./header.js";

const VendorMaster = ({ setvalue ,tableName,aboutTable , addButton}) => {
  const data = [
    {
      vendordetails: [
        {
          vendorName: "Suyog",
          vendorCode: "TN_VEN26",
          pfmsStatus: "PENDING",
        },
      ],
      companyName: "ALIGHT",
      emailId: "SUYOG@COM",
      phoneNo: "5354554656",
      status: ["Active","Pending"],
      actions: ["View", "Edit", "Delete"],
    },
    {
      vendordetails: [
        {
          vendorName: "partth",
          vendorCode: "TN_VEN6",
          pfmsStatus: "ACCP",
        },
      ],
      companyName: "alight",
      emailId: "parth@gmail.com",
      phoneNo: "9103298293",
      status: ["Active","Approved"],
      actions: ["View", "Edit", "Delete"],
    },
    {
      vendordetails: [
        {
          vendorName: "parthhhh",
          vendorCode: "TN_VEN7",
          pfmsStatus: "ACCP",
        },
      ],
      companyName: "alight",
      emailId: "parth@gmail.com",
      phoneNo: "9109283192",
      status: ["Active","Approved"],
      actions: ["View", "Edit", "Delete"],
    },
  ];

  // Extract header keys from the first item in the data array
  const headerKeys = Object.keys(data[0]);

  console.log(data);

  return (
    <>
      <Header setvalue={setvalue} />
      <div className="homeContainer">
        <NavBar />
        <div className="bodyContainer">
          <div className="bodyHead">
            <div className="headTop">
              <h3>{tableName}</h3>

              <div className="dashItems">
                <img
                  style={{ cursor: "pointer" }}
                  src={Home}
                  alt="searchIcon"
                />
                <p>/ Vendor Master</p>
                <div className="searchBar"></div>
              </div>
            </div>
            <div className="headBody">
              <p>
                {aboutTable}
              </p>
            </div>
          </div>

        {addButton && <div className="addButton">
            <button>Add New Vendor</button>
          </div>
       }

          <div className="tableContainer">
            <div className="tableTop">
              <div>
                <p>Results</p>
              </div>
              <div className="searchContainer">
                <p>Search</p>
                <input className="searchBox"></input>
              </div>
            </div>
            <table className="dataTable">
              <thead>
                <tr>
                  {headerKeys.map((key, index) => (
                    <th key={index}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
            {data.map((item, index) => (
         <tr key={index}>
         {headerKeys.map((key, keyIndex) => (
           <td key={keyIndex}>
             {Array.isArray(item[key]) && key !== 'actions' && key !== 'status'  ? (
               item[key].map((subItem, subIndex) => (
                 <div key={subIndex}>
                   {Object.entries(subItem).map(([subKey, subValue], subKeyIndex) => (
                     <div key={subKeyIndex}>
                       <b>{subKey}</b>: {subValue}
                     </div>
                   ))}
                 </div>
               ))
             ) : key === 'actions' || key === 'status'  ? (
               item[key].map((action, actionIndex) => (
                 <button
                   key={actionIndex}
                   className={`buttonStyle ${action.toLowerCase()}Btn`}
                 >
                   {action}
                 </button>
               ))
             ) : (
               item[key]
             )}
           </td>
         ))}
       </tr>
       
            ))}
          </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorMaster;
