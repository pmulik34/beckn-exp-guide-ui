import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import "./welcomeScreen.css";

const WelcomeScreen = () => {
  const [size, setSize] = useState<SizeType>("large");
  const navigate = useNavigate();

  return (
    <div className="welcome-Screen-container">
      <div className="child-container">
        <div className="headLogo">
        <img className="Beckn-logo" src="/assets/BecknLogo.svg" alt={"Logo"} />
        </div>
        <div className="welcomeQuote-container">
          <Typography className="welcomeQuote">welcome to the</Typography>
          <Typography className="welcomeQuote">
            beckn experience center
          </Typography>
        </div>
        <div style={{position:"relative", bottom:'120px'}}>
        <button onClick={()=>navigate('/select-experience')} className="border-gradient border-gradient-purple">
          <span style={{paddingRight:"5px"}}>EXPLORE</span>
          <span style={{paddingLeft:"5px"}}><img src="/assets/tiltArrow.svg" alt="" /></span>
        </button>
        
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
