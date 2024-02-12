import { Modal } from "antd";
import React, { useState } from "react";
import ChooseRegenAgExp from "../../common/Tabs/chooseRegenAgExp";
import VideoTemplate from "../../common/videoTemplate/videoTemplate";
import "./regenerativeAgriculture.css";

const RegenerativeAgricultureIframe = () => {
  const ODRUrl = process.env.REACT_APP_ODR_APP_URL;

  return (
    <div>
      <ChooseRegenAgExp
        iframeURL={ODRUrl}
        appDashboard={
          <div className="RA_wrapper">
            <VideoTemplate mainIconUrl="https://player.vimeo.com/video/808586015?h=aa4c79b136&amp;badge=0&amp;player_id=0&amp;app_id=58479" />
          </div>
        }
      />
    </div>
  );
};

export default RegenerativeAgricultureIframe;
