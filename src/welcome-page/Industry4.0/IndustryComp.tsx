import React, { useState } from "react";
import Tabs from "../../common/Tabs/tabs";
import VideoTemplate from "../../common/videoTemplate/videoTemplate";
import IndustryCompIframe from "../IndustryCompIframe";
import Modal from "../modal";

const IndustryComp = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100vh" }}>
      <Tabs secondProps={<IndustryCompIframe />} />
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

export default IndustryComp;
