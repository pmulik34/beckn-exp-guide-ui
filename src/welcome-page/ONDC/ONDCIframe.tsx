import { Modal } from "antd";
import React, { useState } from "react";
import ChooseRegenAgExp from "../../common/Tabs/chooseRegenAgExp";
import VideoTemplate from "../../common/videoTemplate/videoTemplate";
import ExitModal from "../modal";
import "./ONDC.css";

const ONDCIframe = () => {
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = useState(false);
  const ONDCUrl = process.env.REACT_APP_ONDC_APP_URL;

  return (
    <div>
      <ChooseRegenAgExp
        iframeURL={ONDCUrl}
        appDashboard={
          <div className="ondc_wrapper">
            <div className="ondc_dashboard">
              {"< Placeholder for ONDC Dashboard > "}
            </div>
            <div className="ONDC_exit">
              <div className="ondc_demo_btn" onClick={() => setOpen(true)}>
                <img
                  style={{ width: "unset" }}
                  src="/assets/playIcon.svg"
                  alt={"playIcon"}
                />
                watch demo
              </div>
              <div className="exit_btn_ondc">
                {!openModal ? (
                  <img
                    onClick={() => setOpenModal(true)}
                    src="/assets/exit-Btn_icon.svg"
                    alt="curvedArrow"
                  />
                ) : (
                  <ExitModal flag={openModal} pathName={"/RegenAg"} />
                )}
              </div>
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
