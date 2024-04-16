import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import "./welcomeScreen.css";

const WelcomeScreen = () => {
  const [size, setSize] = useState<SizeType>("large");
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div className="welcome-Screen-container">
      <div className="child-container">
        <div className="headLogo">
          <img className="Beckn-logo" src="/assets/beckn_lg.svg" alt={"Logo"} />
        </div>
        <div className="animate fadeIn five">
          <Typography className="welcomeQuote">welcome to the</Typography>
          <Typography className="welcomeQuote">
            beckn experience center
          </Typography>
        </div>
        <div className="animate fadeIn five">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <button
              onClick={() => navigate("/select-experience")}
              className="welcom-begin-button"
            >
              <span style={{ paddingRight: "5px", color: "#FFFF" }}>begin</span>
              <span style={{ paddingLeft: "5px" }}>
                <img
                  style={{ width: "16px" }}
                  src="/assets/tiltArrow.svg"
                  alt=""
                />
              </span>
            </button>
            <img
              src="/assets/jica.png" 
              alt="Logo"
              style={{ width: "99px", height: "80px", marginTop: "3rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
