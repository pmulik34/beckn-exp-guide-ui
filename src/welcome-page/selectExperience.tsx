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
    <div style={{ overflow: "hidden" }}>
      <div className="headLogo-image">
        <img className="Beckn-image" src="/assets/beckn_lg.svg" alt={"Logo"} />
        <button
          onClick={() => navigate("/")}
          style={{ width: "55px", marginTop: "-10px" }}
          className="home-buttom-nevigate"
        >
          <span>
            <img
              style={{ width: "24px", position: "relative" }}
              src="/assets/home.svg"
              alt=""
            />
          </span>
        </button>
      </div>
      <div className="welcome-Screen-container">
        <div className="child-container">
          <div className="animates fadeIns fives home-card-container">
            <ul className="card-sub-containers">
              <li onClick={() => handleNevigate("PCM")}>
                <div className="card-with-image">
                  <img
                    style={{ borderRadius: "35px" }}
                    className="first-image-card"
                    src="/assets/PCM.svg"
                    alt={"BecknLogoIcon"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">introducing mobility</span>
                    <br />
                    <span className="font-color">to pass Culture</span>
                  </p>
                </div>
              </li>
              <li onClick={() => handleNevigate("OSC")}>
                <div className="card-with-image">
                  <img
                    style={{ borderRadius: "35px" }}
                    className="first-image-card"
                    src="/assets/OSC.svg"
                    alt={"BecknLogoIcon"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">commerce using</span>
                    <br />
                    <span className="font-color">OpenStreetMap</span>
                  </p>
                </div>
              </li>
              <li onClick={() => handleNevigate("cityOfAfrica")}>
                <div className="card-with-image">
                  <img
                    style={{ borderRadius: "35px" }}
                    className="first-image-card"
                    src="/assets/smartafrica.png"
                    alt={"BecknLogoIcon"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">enabling smart</span>
                    <br />
                    <span className="font-color">gambia</span>
                  </p>
                </div>
              </li>
              <li onClick={() => handleNevigate("cityOfLight")}>
                <div className="card-with-image">
                  <img
                    className="first-image-card"
                    src="/assets/city-of-light.png"
                    alt={"BecknLogoIcon"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">experience the</span>
                    <br />
                    <span className="font-color">city of lights</span>
                  </p>
                </div>
              </li>
              <li onClick={() => handleNevigate("himalayas")}>
                <div className="card-with-image">
                  <img
                    className="first-image-card"
                    src="/assets/XXX.png"
                    alt={"BecknLogoIcon"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">a tryst with the</span>
                    <br />
                    <span className="font-color">himalayas</span>
                  </p>
                </div>
              </li>
              <li onClick={() => handleNevigate("cities")}>
                <div className="card-with-image">
                  <img
                    className="second-image-card"
                    src="/assets/YYY.png"
                    alt={"BecknLogoIcon"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">enabling</span>
                    <br />
                    <span className="font-color">smart cities</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectExperience;
