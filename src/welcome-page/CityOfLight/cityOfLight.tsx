import React, { useState } from "react";
import Tabs from "../../common/Tabs/tabs";
import CityOfLightIframe from "../cityOfLightIframe";
import VideoTemplate from "../../common/videoTemplate/videoTemplate";
import Modal from "../modal";
import { useNavigate } from "react-router-dom";
import "../Himalaya/himalayas.css";
const CityOfLight = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Tabs
        firstProps={
          <VideoTemplate mainIconUrl="https://player.vimeo.com/video/824663740?h=9464185e33&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
        }
        secondProps={<CityOfLightIframe />}
        thirdProps={
          <VideoTemplate mainIconUrl="https://player.vimeo.com/video/809506238?h=8eb603c1ba&amp;badge=0&amp;player_id=0&amp;app_id=58479" />
        }
        fourthProps={
          <VideoTemplate mainIconUrl="https://player.vimeo.com/video/824729531?h=b973254da6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
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

export default CityOfLight;
