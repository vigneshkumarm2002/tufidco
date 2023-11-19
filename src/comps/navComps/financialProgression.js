import React, { useState } from "react";
import "./../Home.css";
import FolderPath from "../folderPath";
import "./../cardContainer.css"

const FinancialProgress = ({ tableName, aboutTable, addButton, folderpath }) => {
  const [formValues, setFormValues] = useState({
    scheme: "",
    financialYear: "",
    sector: "",
    projectId: "",
    project: "",
    requestAmount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSaveProject = () => {
    // Implement your save project logic here
    console.log("Saving project:", formValues);
  };

  return (
    <div className="bodyContainer">
      <FolderPath folderpath={folderpath} tableName={tableName} aboutTable={aboutTable} />

      {addButton && (
        <div className="addButton">
          <button>Add New </button>
        </div>
      )}

      <div className="FormContainer">
        <div className="formElements">
        <div className="textBoxContainer" style={{ marginTop: "40px" }}>
          <label htmlFor="scheme">Select Scheme</label>
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
          <label htmlFor="financialYear">Financial Year</label>
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
          <label htmlFor="sector">Sector</label>
          <div className="textBox">
            <input
              type="text"
              id="sector"
              name="sector"
              value={formValues.sector}
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
          <label htmlFor="project">Project</label>
          <div className="textBox">
            <input
              type="text"
              id="project"
              name="project"
              value={formValues.project}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="textBoxContainer">
          <label htmlFor="requestAmount">Request Amount</label>
          <div className="textBox">
            <input
              type="text"
              id="requestAmount"
              name="requestAmount"
              value={formValues.requestAmount}
              onChange={handleChange}
            />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
          <div></div>
          <div className="addButton">
          <button className="" onClick={handleSaveProject}>
            Save Project
          </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FinancialProgress;
