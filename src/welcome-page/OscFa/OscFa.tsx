import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VideoTemplate from "../../common/videoTemplate/videoTemplate";
import Modal from "../modal";
import TabsFa from "../../common/Tabs/tabsFa";
import OscIframeFa from "../oscIframeFa";

const OscFa = () => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <TabsFa
        firstProps={
          <VideoTemplate mainIconUrl="https://player.vimeo.com/video/835295642?h=07cf8dbef3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />
        }
        secondProps={<OscIframeFa />}
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

export default OscFa;
