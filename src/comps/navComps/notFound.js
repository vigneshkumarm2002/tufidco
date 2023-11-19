import React from "react";
import ErrorImg from "./../../assets/not found.png";
import { useNavigate } from "react-router-dom";
import "./../cardContainer.css";

const NotFound = () => {
  const navigate = useNavigate();
  const handleError = () => {
    navigate("/dashboard");
  };
  return (
    <div className="bodyContainer">
      <div className="flexError">
        <div className="imgErrorContainer">
          <img src={ErrorImg} alt="Error" />
        </div>
        <p>Oops!..Page Not Found</p>
        <div className="addButton">
          <button className="" onClick={handleError}>
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
