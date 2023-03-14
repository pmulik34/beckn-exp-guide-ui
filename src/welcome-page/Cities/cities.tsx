import React from "react";
import Tabs from "../../common/Tabs/tabs";
import CitiesIframe from "../citiesIframe";
import VideoTemplate from "../../common/videoTemplate/videoTemplate";
import Modal from "../modal";
import { useNavigate } from "react-router-dom";
import "../Himalaya/himalayas.css";
const Cities = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Tabs
        firstProps={<VideoTemplate />}
        secondProps={<CitiesIframe />}
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

export default Cities;
