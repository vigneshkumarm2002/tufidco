import React from "react";
import "./../cardContainer.css"
import "./../Home.css"
import FolderPath from "../folderPath";

const FileUpload = ({tableName,aboutTable,addButton,folderpath}) => {
  
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

      
         
        <div className="FormContainer">
            <p><b>Guidelines File Upload :</b></p><br></br>
            <br></br>
            <p>1. Project File Format must be use as sample File format (Administrative Sanction File Format)<br></br>
2. Master must be use as sample data format (Masters File)<br></br>
- Agency Code<br></br>
- Sanction Type<br></br>
- Loan ROI<br></br>
- Moratorium<br></br>
3. Non Mandate Fields will be value 'NA'</p><br></br><br></br>

<div style={{display:"flex",flexDirection:"row"}}>
    <p>File Upload<font color="#00000">*</font></p>
    <div className="pagebar" style={{marginLeft:"20px"}}>
               <p  className="pageNo">Choose File</p>
              </div>
</div>

<div className="buttonStyle" style={{width:"fit-content",marginTop:"20px"}}>
    <p>Upload</p>
</div>
        </div>
        </div>
    </>
  );
};

export default FileUpload;
