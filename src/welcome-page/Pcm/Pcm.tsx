import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tabs from "../../common/Tabs/tabs";
import VideoTemplate from "../../common/videoTemplate/videoTemplate";
import Modal from "../modal";
import PcmIframe from "../pcmIframe";

const Pcm = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100vh" }}>
      <Tabs
        firstProps={
          <VideoTemplate mainIconUrl="https://player.vimeo.com/video/852615647?h=58b430f362&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
        }
        secondProps={<PcmIframe />}
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

export default Pcm;
