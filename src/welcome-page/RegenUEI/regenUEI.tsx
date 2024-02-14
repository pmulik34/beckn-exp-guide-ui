import React, { useState } from "react";
import Tabs from "../../common/Tabs/tabs";
import VideoTemplate from "../../common/videoTemplate/videoTemplate";
import RegenUEIIframe from "./regenUEIQr";

const RegenUEI = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", height: "100vh" }}
      className="regenUEI_tab_wrappe"
    >
      <Tabs
        firstProps={
          <VideoTemplate mainIconUrl="https://player.vimeo.com/video/808588440?h=dca4fb7ac7&amp;badge=0&amp;player_id=0&amp;app_id=58479" />
        }
        secondProps={<RegenUEIIframe />}
        thirdProps={
          <VideoTemplate mainIconUrl="https://player.vimeo.com/video/808586015?h=aa4c79b136&amp;badge=0&amp;player_id=0&amp;app_id=58479" />
        }
      />
    </div>
  );
};

export default RegenUEI;
