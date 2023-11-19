import React from 'react'
import Table from './table'
import FolderPath from './folderPath'
import CardContainer from './cardContainer';

import "./table.css";

const Container = ({tableData, tableName, aboutTable, addButton, folderpath ,cardData, format}) => {
    console.log("tableData",tableData)
  return (
   <>
   
        <div className="bodyContainer">
         
         <FolderPath folderpath={folderpath} tableName={tableName} aboutTable={aboutTable}/>
         
      {cardData && <CardContainer cardData={cardData} format={format}/>}

          {addButton && (
            <div className="addButton">
              <button>Add New </button>
            </div>
          )}

         {tableData && <Table tableData={tableData} />}
          </div>
      
   </>
  )
}

export default Container