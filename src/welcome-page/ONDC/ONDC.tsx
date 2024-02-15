import React, { useState } from "react";
import Tabs from "../../common/Tabs/tabs";
import VideoTemplate from "../../common/videoTemplate/videoTemplate";
import ONDCIframe from "./ONDCIframe";
import ExitModal from "../modal";

const ONDC = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        position: "relative",
        margin: "0 auto",
      }}
    >
      <Tabs
        firstProps={
          <VideoTemplate mainIconUrl="https://player.vimeo.com/video/808588440?h=dca4fb7ac7&amp;badge=0&amp;player_id=0&amp;app_id=58479" />
        }
        secondProps={<ONDCIframe />}
        thirdProps={
          <VideoTemplate mainIconUrl="https://player.vimeo.com/video/808586015?h=aa4c79b136&amp;badge=0&amp;player_id=0&amp;app_id=58479" />
        }
      />
      <div className="ondcExit_btn">
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
  );
};

export default ONDC;
