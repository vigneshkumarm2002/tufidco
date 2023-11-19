import React from 'react'
import Home from "./../assets/dashboardIcon.svg";
import "./table.css"; 

const FolderPath = ({tableName,aboutTable,folderpath}) => {
  return (
    <div className="bodyHead">
            <div className="headTop">
              <h3>{tableName}</h3>
               {aboutTable && <p>{aboutTable}</p> }
            </div>

            <div className="paths">
            <span style={{color:"white"}}
                className="material-symbols-rounded homeIcon"
              > home</span>
              <p style={{display:'inline'}}>/ {folderpath}</p>
            </div>
          </div>
  )
}

export default FolderPath