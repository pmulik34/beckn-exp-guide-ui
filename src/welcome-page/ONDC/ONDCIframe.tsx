import { Modal } from "antd";
import React, { useState } from "react";
import ChooseRegenAgExp from "../../common/Tabs/chooseRegenAgExp";
import VideoTemplate from "../../common/videoTemplate/videoTemplate";
import "./ONDC.css";

const ONDCIframe = () => {
  const [open, setOpen] = useState(false);
  const ODRUrl = process.env.REACT_APP_ODR_APP_URL;

  return (
    <div>
      <ChooseRegenAgExp
        iframeURL={ODRUrl}
        appDashboard={
          <div className="ondc_wrapper">
            <div className="ondc_dashboard">
              {"< Placeholder for ONDC Dashboard > "}
            </div>
            <div className="ondc_demo_btn" onClick={() => setOpen(true)}>
              <img src="/assets/playIcon.svg" alt={"playIcon"} />
              watch demo
            </div>
            <Modal
              centered
              open={open}
              onOk={() => setOpen(false)}
              onCancel={() => setOpen(false)}
              width={"unset"}
              className="ondc_video_modal"
            >
              <VideoTemplate mainIconUrl="https://player.vimeo.com/video/808586015?h=aa4c79b136&amp;badge=0&amp;player_id=0&amp;app_id=58479" />
            </Modal>
          </div>
        }
      />
    </div>
  );
};

export default ONDCIframe;
