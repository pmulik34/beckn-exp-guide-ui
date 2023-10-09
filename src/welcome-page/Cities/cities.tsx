import React, { useState } from "react";
import Tabs from "../../common/Tabs/tabs";
import CitiesIframe from "../citiesIframe";
import VideoTemplate from "../../common/videoTemplate/videoTemplate";
import Modal from "../modal";
import { useNavigate } from "react-router-dom";
import "../Himalaya/himalayas.css";
const Cities = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100vh" }}>
      <Tabs
        firstProps={
          <VideoTemplate mainIconUrl="https://player.vimeo.com/video/808588011?h=d81ed972e2&amp;badge=0&amp;player_id=0&amp;app_id=58479" />
        }
        secondProps={<CitiesIframe />}
        thirdProps={
          <VideoTemplate mainIconUrl="https://player.vimeo.com/video/809506238?h=8eb603c1ba&amp;badge=0&amp;player_id=0&amp;app_id=58479" />
        }
        fourthProps={
          <VideoTemplate mainIconUrl="https://player.vimeo.com/video/808588900?h=93081abfef&amp;badge=0&amp;player_id=0&amp;app_id=58479" />
        }
      />
      <div className="exit-icon">
        {!openModal ? (
          <img
            onClick={() => setOpenModal(true)}
            src="/assets/curvedArrow.svg"
            alt="curvedArrow"
          />
        ) : (
          <Modal flag={openModal} pathName={"/ThankYou"} />
        )}
      </div>
    </div>
  );
};

export default Cities;
