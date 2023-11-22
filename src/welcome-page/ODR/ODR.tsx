import React, { useState } from "react";
import Tabs from "../../common/Tabs/tabs";
import Modal from "../modal";
import ODRIframe from "../ODRIframe";

const ODR = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100vh" }}>
      <Tabs secondProps={<ODRIframe />} />
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

export default ODR;
