import React from "react";
import "./Home.css";
import "./table.css";
import FolderPath from "./folderPath";

const SchemeFinancialPosition = ({data,folderpath,tableName,aboutTable,addButton}) => {
  
    console.log(data)

  return (
    <>
      <div className="bodyContainer">
      <FolderPath folderpath={folderpath} tableName={tableName} aboutTable={aboutTable} />

      {addButton && (
        <div className="addButton">
          <button>Add New </button>
        </div>
      )}
         

          <div className="tableContainer">
          {data.map((item,index)=>(
                  <div style={{marginTop:"20px"}}>
                     <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                  <div style={{display:"flex",flexDirection:"row",gap:"20px"}}><p  style={{color:"black",fontSize:"medium"}}>{item.project}</p>
                  <p style={{color:"white",fontSize:"smaller",marginLeft:"5px",background:"#4EC7EF",paddingLeft:"5px",paddingRight:"5px",borderRadius:"3px", display:"flex",alignItems:"center"}}>{item.totproj}</p>
                  <p style={{color:"white",fontSize:"smaller",marginLeft:"5px",background:"#ea7fb8",paddingLeft:"5px",paddingRight:"5px",borderRadius:"3px",display:"flex",alignItems:"center"}}>{item.amount}</p>
                  </div>
                  <span className="material-symbols-rounded" style={{color:"black"}}>expand_more</span>
                </div>
               
                  </div>
                  
                ))}
          </div>

       
         </div>
    </>
  );
};
export default SchemeFinancialPosition;
