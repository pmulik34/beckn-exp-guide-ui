import React from "react";
import Tabs from "../../common/Tabs/tabs";
import HimalayasIframe from "../himalayasIframe";
import VideoTemplate from "../../common/videoTemplate/videoTemplate";
import Modal from "../modal";
import { useNavigate } from "react-router-dom";
import "./himalayas.css";

const Himalayas = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Tabs
        firstProps={<VideoTemplate />}
        secondProps={<HimalayasIframe />}
        thirdProps={<VideoTemplate />}
        fourthProps={<VideoTemplate />}
        FifthProps={Modal}
      />
      <div
        style={{ position: "fixed", bottom: "60px", right: "40px" }}
        className="exit-icon"
      >
        <img onClick={()=>navigate('/thankYou')} src="/assets/curvedArrow.svg" alt="curvedArrow" />
      </div>
    </div>
  );
};

export default Himalayas;
