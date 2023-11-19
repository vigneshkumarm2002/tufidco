import React from "react";
import "./../cardContainer.css"
import "./../Home.css"
import FolderPath from "../folderPath";

const GanttChart = ({tableName,folderpath,addButton,aboutTable}) => {
  const cardData = [
    {
      name: "# ACCESSORIES",
      dep: "MP Public Works Department (MP PWD)",
      type: "Medical works",
      prirority: "medium",
      planstartdate: "March 17, 2023 To April 17, 2024",
      actstartdate: "May 17, 2023 To June 17, 2024",
      progree: 50,
      lastupdatede: "Jan. 10, 2023, 2:17 p.m.",
    },
    {
      name: "# AIR CONDITIONER HVAC",
      dep: "MP Public Works Department (MP PWD)",
      type: "Medical works",
      prirority: "medium",
      planstartdate: "March 17, 2023 To April 17, 2024",
      actstartdate: "May 17, 2023 To June 17, 2024",
      progree: 0,
      lastupdatede: "Jan. 10, 2023, 2:17 p.m.",
    },
    {
      name: "# Aluminum Structural Glazing Composite Panel and Spider glazing",
      dep: "MP Public Works Department (MP PWD)",
      type: "Medical works",
      prirority: "medium",
      planstartdate: "March 17, 2023 To April 17, 2024",
      actstartdate: "May 17, 2023 To June 17, 2024",
      progree: 10,
      lastupdatede: "Jan. 10, 2023, 2:17 p.m.",
    },
    {
      name: "# Aluminum Work",
      dep: "MP Public Works Department (MP PWD)",
      type: "Medical works",
      prirority: "medium",
      planstartdate: "March 17, 2023 To April 17, 2024",
      actstartdate: "May 17, 2023 To June 17, 2024",
      progree: 70,
      lastupdatede: "Jan. 10, 2023, 2:17 p.m.",
    },
  ];

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

        <div className="GanttCard">
          {cardData.map((card, index) => (
            <div
              className="textCard"
            >
              <div>
                <p
                  style={{
                    color: "blue",
                    textAlign: "start",
                    height: "100%",
                    marginTop: "10px",
                    marginBottom: "10px",
                    fontWeight: "medium",
                  }}
                >
                  {card.name}
                </p>
              </div>

              <div className="flexRow">
                <p className="depType">Gantt Plan</p>
                <p className="depType2">priority : {card.prirority}</p>
              </div>

              <div className="cardText">
                <p>Plan Start Date & End Date :{card.planstartdate}</p>

                <p>Actual Start Date & End Date :{card.actstartdate}</p>

                <progress
                  id="file"
                  value={card.progree}
                  max="100"
                  style={{ marginTop: "10px", color: "green" }}
                ></progress>

                <p>
                  Last Updated : <b>{card.lastupdatede}</b>
                </p>

                <span
                  className="material-symbols-rounded"
                  style={{ color: "white" }}
                ></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GanttChart;
