import React from 'react';
import "./cardContainer.css";

const CardContainer = ({ cardData, format }) => {
  return (
    <div className='card-Container'>
      {cardData.map((item, index) => (
        <div className='cardData' style={{ backgroundColor:item.bgColor }}>
          <span className='material-symbols-rounded'>{item.icon}</span>
          <div style={{display:"flex",flexDirection:"column",}}>
          {format && <p style={{textAlign:"right"}}>Format - {index + 1}</p>}
          <p style={{ fontSize: format ? "14px" : "inherit" }}>{item.text}</p>
         
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
