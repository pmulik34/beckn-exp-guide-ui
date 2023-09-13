import React, { useState } from "react";
import VideoTemplate from "../videoTemplate/videoTemplate";
import Modal from "../../welcome-page/modal";
import HeaderTab from "../headerTab/HeaderTab";
import SmartCities from "../product/SmartCities";

const ChooseExperienceSmartCities = () => {
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
            <span>a world without beckn</span>
          </div>
        </div>
      ),
      content: (
        <VideoTemplate mainIconUrl="https://player.vimeo.com/video/808588011?h=d81ed972e2&amp;badge=0&amp;player_id=0&amp;app_id=58479" />
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
            <span>a world with beckn</span>
          </div>
        </div>
      ),
      content: <SmartCities />,
      disabled: false,
    },
    {
      key: "4",
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
        <VideoTemplate mainIconUrl="https://player.vimeo.com/video/809506238?h=8eb603c1ba&amp;badge=0&amp;player_id=0&amp;app_id=58479" />
      ),
      disabled: false,
    },
    {
      key: "5",
      label: (
        <div
          className="tablinks"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img src="/assets/bulbIcon.svg" alt={"Icon"} width={"25%"} />
          <div style={{ paddingLeft: "14.4px" }}>
            <span>imagining the future</span>
          </div>
        </div>
      ),
      content: (
        <VideoTemplate mainIconUrl="https://player.vimeo.com/video/808588900?h=93081abfef&amp;badge=0&amp;player_id=0&amp;app_id=58479" />
      ),
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
      <HeaderTab
        tabClassName="himalyas-tab"
        tabs={tabs}
        defaultActiveKey={"3"}
      />
    </div>
  );
};

export default ChooseExperienceSmartCities;
