import React from "react";

import FolderPath from "../folderPath.js";
import { useState } from "react";

const ProjectSanction = ({tableName,aboutTable,addButton,folderpath}) => {

    const [formValues, setFormValues] = useState({
        financialYear: "",
        scheme: "",
        projectId: "",
        projectName: "",
        technicalSanctionReference: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
      };
    
      const handleAddWork = () => {
        // Implement your add work logic here
        console.log("Adding work:", formValues);
      };
  return (
    <>
      <div className="bodyContainer">
        <FolderPath
          folderpath={folderpath}
          tableName={tableName}
          aboutTable={aboutTable}
        />

        {addButton && (
          <div className="addButton">
            <button>Add New </button>
          </div>
        )}

        <div className="FormContainer" style={{display:"flex", flexDirection:"column" ,gap:"40px"}}>
            <div className="someData">
          <div >
            <p>
              <b>Approved Project Cost (in lakhs)</b> : ₹ 12345.99 lacs
            </p>
            </div>
            <div >
            <p >
              <b>Approved Project Cost (in lakhs)</b> : ₹ 12345.99 lacs
            </p>
          </div>
          <div
         
          >
            <p>
              <b>ULB Share (in lakhs)</b> : ₹ 12345.99 lacs
            </p>
            </div>
            <div >
            <p >
              <b>AMRUT 2.0 Share (in lakhs)</b> : ₹ 12345.99 lacs
            </p>
          </div>
          <div
         
          >
            <p>
              <b>SUIDF Share (in lakhs)</b> : ₹ 12345.99 lacs
            </p>
            </div>
            <div >
            <p >
              <b>Other Share (in lakhs)</b> : ₹ 12345.99 lacs
            </p>
          </div>
          </div>

        <div className="formElements" >
        <div className="textBoxContainer">
          <label htmlFor="financialYear">Select Financial Year</label>
          <div className="textBox">
            <input
              type="text"
              id="financialYear"
              name="financialYear"
              value={formValues.financialYear}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="textBoxContainer">
          <label htmlFor="scheme">Scheme</label>
          <div className="textBox">
            <input
              type="text"
              id="scheme"
              name="scheme"
              value={formValues.scheme}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="textBoxContainer">
          <label htmlFor="projectId">Project Id</label>
          <div className="textBox">
            <input
              type="text"
              id="projectId"
              name="projectId"
              value={formValues.projectId}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="textBoxContainer">
          <label htmlFor="projectName">Project Name</label>
          <div className="textBox">
            <input
              type="text"
              id="projectName"
              name="projectName"
              value={formValues.projectName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="textBoxContainer">
          <label htmlFor="technicalSanctionReference">Technical Sanction Reference No.</label>
          <div className="textBox">
            <input
              type="text"
              id="technicalSanctionReference"
              name="technicalSanctionReference"
              value={formValues.technicalSanctionReference}
              onChange={handleChange}
            />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
          <div></div>
          <div className="addButton">
          <button className="Btn" onClick={handleAddWork}>
            Add Work
          </button>
          </div>
        </div>
      </div>
        </div>

        
      </div>
    </>
  );
};

export default ProjectSanction;
