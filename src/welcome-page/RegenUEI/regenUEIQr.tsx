import { Modal, QRCode } from "antd";
import React, { useState } from "react";
import ChooseRegenAgExp from "../../common/Tabs/chooseRegenAgExp";
import VideoTemplate from "../../common/videoTemplate/videoTemplate";
import "./regenUEI.css";

const RegenUEIQr = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <ChooseRegenAgExp />
    </div>
  );
};

export default RegenUEIQr;
