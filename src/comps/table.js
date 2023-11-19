import React from "react";
import "./table.css";
import "./Home.css"

const Table = ({ tableData }) => {
  // Extract header keys from the first item in the data array
  const headerKeys = Object.keys(tableData[0]);

  return (
    <div className="tableContainer">
      <div className="tableTop">
        <div className="entries">
          <p>Show</p>
          <select id="entries" name="entries">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
          </select>
          <p>entries</p>
        </div>
        <div className="searchBar">
          <input className=""></input>
          <button><span className="material-symbols-rounded">search</span></button>
        </div>
      </div>
      <div className="tableBox">
        <table className="dataTable">
          <thead>
            <tr>
              {headerKeys.map((key, index) => (
                <th key={index}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                {headerKeys.map((key, keyIndex) => (
                  <td key={keyIndex}>
                    {Array.isArray(item[key]) &&
                    key !== "actions" &&
                    key !== "status"
                      ? item[key].map((subItem, subIndex) => (
                          <div key={subIndex}>
                            {Object.entries(subItem).map(
                              ([subKey, subValue], subKeyIndex) => (
                                <div key={subKeyIndex}>
                                  <b style={{fontWeight:"500"}}>{subKey}</b>:{subValue}
                                </div>
                              )
                            )}
                          </div>
                        ))
                      : key === "actions" || key === "status"
                      ? item[key].map((action, actionIndex) => (
                          <button
                            key={actionIndex}
                            className={`buttonStyle ${action.toLowerCase()}Btn`}
                          >
                            {action}
                          </button>
                        ))
                      : item[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="paginationContainer">
        <p>Showing {tableData.length} entries</p>
        <div className="pagination">
          <button>Previous</button>
          <button style={{ backgroundColor: "#1B8381", color: "white" }}>
            1
          </button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Table;
