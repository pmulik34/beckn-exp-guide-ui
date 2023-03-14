import React, { useState } from "react";
import { Card } from "antd";
import "./thankYou.css";
import { useNavigate } from "react-router-dom";

const ThankYou: React.FC = () => {
  const navigate = useNavigate();
  
  const handleNevigate = () => {
    navigate("/");
  };
  return (
    <div
      style={{ display: "flex", justifyContent: "center", alignItems: "end" }}
    >
      <Card className="card-container" style={{ width: 1120 }}>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <img className="beckn-logo" src="/assets/BecknLogo.svg" alt={"Logo"} />
          </li>
          <li>
            <h2 className="head-text">thank you for visiting the</h2>
            <h2 className="head-text">beckn experience center</h2>
          </li>
          <li>
            <h2 className="head-child-text">check-in with us on Twitter!</h2>
          </li>
          <li>
            <img src="/assets/barcode.svg" alt={"Logo"} />
          </li>
          <li>
            <button onClick={handleNevigate} className="border-gradient border-gradient-purple">
              <span style={{  paddingRight: "5px"  }}>
                <img
                  style={{ width: "24px", position:"relative", top:"5px" }}
                  src="/assets/home.svg"
                  alt=""
                />
              </span>
              <span style={{ paddingLeft: "5px", color: "#343538"}}>go back home</span>
            </button>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default ThankYou;
