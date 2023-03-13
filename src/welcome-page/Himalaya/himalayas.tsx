import React from "react";
import Tabs from "../../common/Tabs/tabs";
import HimalayasIframe from "../himalayasIframe";
import VideoTemplate from "../../common/videoTemplate/videoTemplate";
import Modal from "../modal";
const Himalayas = () => {
  return (
    <div>
      <Tabs
        firstProps={<VideoTemplate />}
        secondProps={<HimalayasIframe />}
        thirdProps={<VideoTemplate />}
        fourthProps={<VideoTemplate />}
        fifthProps={<Modal />}
      />
      
    </div>
  );
};

export default Himalayas;
