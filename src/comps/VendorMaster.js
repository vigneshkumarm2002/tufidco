import React from "react";
import "./VendorMaster.css";
import NavBar from "./navContainer.js";

import Home from "./../assets/dashboardIcon.svg";
import Header from "./header.js";


const VendorMaster = ({setvalue}) => {
  
  return (
    <>
 <Header setvalue={setvalue} />
      <div className="homeContainer">
        <NavBar />
        <div className="bodyContainer">
          <div className="bodyHead">
            <div className="headTop">
              <h3>Vendor Master </h3>
             
              <div className="dashItems">
              <img
                  style={{ cursor: "pointer" }}
                  src={Home}
                  alt="searchIcon"
                />
                 <p>/ Vendor Master</p>
                <div className="searchBar">
                 
                </div>
              </div>
              </div>
              <div className="headBody">
                <p>Add new Vendor, edit data,print data and remove from system</p>
              </div>
            
             
           
          </div>

          <div className="addButton">
                <button>Add New Vendor</button>
          </div>
         
         <div className="tableContainer">
          <div className="tableTop">
            <div>
                <p>Results</p>
            </div>
            <div className="searchContainer">
              <p>Search</p>
              <input className="searchBox">
              </input>
            </div>
          </div>
            <table className="dataTable">
              <thead>
                <th>
                  Vendor Details
                </th>
                <th>
                 Company Name
                </th>
                <th>
                 Email Id
                </th>
                <th>
                 Phone No
                </th>
                <th>
                 Status
                </th>
                <th>
                 Action
                </th>
              </thead>
              <tbody>
              
                <td className="vendorName">
               <b> Vendor Name </b>: Suyog<br></br>
<b>Vendor Code </b>: TN_VEN26<br></br>
<b>PFMS Status </b>: PENDING
                </td>
                <td>
                ALIGHT
                </td>
                <td>
                parth@gmail.com
                </td>
                <td>
                5354554656	
                </td>
                <td>
                 <div className="rowAfter">
                  <p className="greenBtn">Active</p>
                  <p className="greenBtn">Approved</p>
                 </div>
                </td>
                <td>
                <div className="rowAfter">
                  <p className="greenBtn">View</p>
                  <p className="orangeBtn">Edit</p>
                  <p className="blackBtn">Delete</p>
                 </div>
                </td>
            
              </tbody>
            </table>
         </div>
        </div>
      </div>
    </>
  );
};

export default VendorMaster;
