import { Link } from "react-router-dom";
import Title from "../common/title";
import Card from "../common/Cards/card";
import { useNavigate } from "react-router-dom";
import "./selectExperience.css";
import { useEffect } from "react";
import { Typography } from "antd";

const SelectExperience = () => {
  const navigate = useNavigate();
  const handleNevigate = (id: any) => {
    localStorage.setItem("name", id);
    navigate("/progress");
  };
  return (
    <div className="welcome-Screen-container">
      <div className="child-container">
        <div className="headLogo-image">
          <img
            className="Beckn-image"
            src="/assets/BecknLogo.svg"
            alt={"Logo"}
          />
          <button
            onClick={() => navigate("/")}
            style={{ width: "150px", marginTop: "-10px" }}
            className="home-buttom-nevigate"
          >
            <span style={{ paddingRight: "5px" }}>
              <img
                style={{ width: "24px", position: "relative" }}
                src="/assets/home.svg"
                alt=""
              />
            </span>
            <span style={{ paddingLeft: "5px", color: "#343538" }}>home</span>
          </button>
        </div>
        <div className="animates fadeIns fives">
          <Typography className="welcomeQuote">
            select your experience
          </Typography>
        </div>
        <div className="animates fadeIns fives">
          <ul className="card-sub-containers">
            <li onClick={() => handleNevigate("himalayas")}>
              <div className="card-with-image">
                <img
                  className="first-image-card"
                  src="/assets/XXX.png"
                  alt={"BecknLogoIcon"}
                />
                <p className="card-title-image">A Tryst with the Himalayas</p>
              </div>
            </li>
            <li onClick={() => handleNevigate("cities")}>
              <div className="card-with-image">
                <img
                  className="second-image-card"
                  src="/assets/YYY.png"
                  alt={"BecknLogoIcon"}
                />
                <p className="card-title-image">Enabling Smart Cities</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SelectExperience;
