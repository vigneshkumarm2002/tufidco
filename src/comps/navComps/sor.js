import React from "react";
import "./../Home.css";
import FolderPath from "../folderPath";

const SOR = ({ tableName, addButton, aboutTable, folderpath }) => {
  const cardData = [
    {
      name: "# ACCESSORIES",
      dep: "MP Public Works Department (MP PWD)",
      type: "Medical works",
      totalitem: 200,
      lastupdatede: "Jan. 10, 2023, 2:17 p.m.",
    },
    {
      name: "# AIR CONDITIONER HVAC",
      dep: "MP Public Works Department (MP PWD)",
      type: "Medical works",
      totalitem: 80,
      lastupdatede: "Jan. 10, 2023, 2:17 p.m.",
    },
    {
      name: "# Aluminum Structural Glazing Composite Panel and Spider glazing",
      dep: "MP Public Works Department (MP PWD)",
      type: "Medical works",
      totalitem: 101,
      lastupdatede: "Jan. 10, 2023, 2:17 p.m.",
    },
    {
      name: "# Aluminum Work",
      dep: "MP Public Works Department (MP PWD)",
      type: "Medical works",
      totalitem: 55,
      lastupdatede: "Jan. 10, 2023, 2:17 p.m.",
    },
  ];

  return (
    <div className="bodyContainer">
      <FolderPath folderpath={folderpath} tableName={tableName} aboutTable={aboutTable} />

      {addButton && (
        <div className="addButton">
          <button>Add New </button>
        </div>
      )}
        <div className="multipleCard">
          {cardData.map((card, index) => (
            <div className="textCard" key={index}>
              <div className="flexRow">
                <p className="depType">{card.dep}</p>
                <p className="depType2">{card.type}</p>
              </div>
              <div className="cardText">
                <p className="cardTitle">{card.name}</p>
                <p className="cardInfo">Total SOR Item: {card.totalitem}</p>
                <p className="cardInfo">
                  Last Updated: <b>{card.lastupdatede}</b>
                </p>
              </div>
              <span className="material-symbols-rounded materialSymbol"></span>
            </div>
          ))}
        </div>
      </div>
  
  );
};


export default SOR;
