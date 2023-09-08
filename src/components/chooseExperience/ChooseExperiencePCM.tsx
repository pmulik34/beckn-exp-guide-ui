import React, { useState } from "react";
import VideoTemplate from "../videoTemplate/videoTemplate";
import Modal from "../../welcome-page/modal";
import HeaderTab from "../headerTab/HeaderTab";
import Pcm from "../product/Pcm";

const ChooseExperiencePCM = () => {
  const [flag, setFlag] = useState(true);

  const tabs = [
    {
      key: "logo",
      label: (
        <div>
          <img
            style={{ height: "35px", width: "135px" }}
            src={"/assets/beckn_lg.svg"}
            alt={"Icon"}
            width={"98%"}
          />
        </div>
      ),
      content: "",
      disabled: true,
    },
    {
      key: "2",
      label: (
        <div
          className="tablinks"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img src="/assets/bulbIcon.svg" alt={"Icon"} width={"25%"} />
          <div style={{ paddingLeft: "14.4px" }}>
            <span>behind the scenes</span>
          </div>
        </div>
      ),
      content: (
        <VideoTemplate mainIconUrl="https://player.vimeo.com/video/852615647?h=58b430f362&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
      ),
      disabled: false,
    },
    {
      key: "3",
      label: (
        <div
          className="tablinks"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img src="/assets/bulbIcon.svg" alt={"Icon"} width={"25%"} />
          <div style={{ paddingLeft: "14.4px" }}>
            <span>experience a world with beckn</span>
          </div>
        </div>
      ),
      content: <Pcm />,
      disabled: false,
    },
    {
      key: "ForHomeIcon",
      label: (
        <div>
          <img src="/assets/home.svg" alt={"Icon"} width={"98%"} />
        </div>
      ),
      content: <Modal flag={flag} pathName={"/select-experience"} />,
      disabled: false,
    },
  ];

  return (
    <div className="choosingExp_wrapper">
      <HeaderTab tabClassName="OSC-tab" tabs={tabs} defaultActiveKey={"3"} />
    </div>
  );
};

export default ChooseExperiencePCM;
