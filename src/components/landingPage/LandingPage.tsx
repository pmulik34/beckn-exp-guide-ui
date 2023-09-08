import { Typography } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const [size, setSize] = useState<SizeType>("large");
  const navigate = useNavigate();

  return (
    <>
      <div className="welcome-Screen-container">
        <div className="child-container">
          <div className="headLogo">
            <img
              className="Beckn-logo"
              src="/assets/beckn_lg.svg"
              alt={"Logo"}
            />
          </div>
          <div className="animate fadeIn five">
            <Typography className="welcomeQuote">welcome to the</Typography>
            <Typography className="welcomeQuote">
              beckn experience center
            </Typography>
          </div>
          <div className="animate fadeIn five">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
