import React, { useState } from "react";
import "./Home.css";
import NavBar from "./navContainer.js";

import ChartComponent from "./Chart.js";
import Header from "./header.js";

const Navigation = () => {

 const data=[
    {
      "localbodyName": "LocalBody1",
      "code": "LB001",
      "district": "District1",
      "bankAccount": "123456789",
      "emailId": "localbody1@example.com",
      "name": "Account Holder 1",
      "action": ["approve", "edit", "view"]
    },
    {
      "localbodyName": "LocalBody2",
      "code": "LB002",
      "district": "District2",
      "bankAccount": "987654321",
      "emailId": "localbody2@example.com",
      "name": "Account Holder 2",
      "action": ["pending", "edit", "view"]
    },
    {
      "localbodyName": "LocalBody3",
      "code": "LB003",
      "district": "District3",
      "bankAccount": "654321987",
      "emailId": "localbody3@example.com",
      "name": "Account Holder 3",
      "action": ["reject", "delete", "view"]
    }
  ]
  


  return (
    <>
 <Header />

      <div className="homeContainer">
        <NavBar />
        <table className="your-custom-table-class">
      <thead>
        <tr>
          <th>Local Body Name</th>
          <th>Code</th>
          <th>District</th>
          <th>Bank Account</th>
          <th>Email ID</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.localbodyName}</td>
            <td>{row.code}</td>
            <td>{row.district}</td>
            <td>{row.bankAccount}</td>
            <td>{row.emailId}</td>
            <td>{row.name}</td>
            <td>
              {row.action.map((action, index) => (
                <button key={index} >
                  {action}
                </button>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
      
    </>
  );
};

export default Navigation
