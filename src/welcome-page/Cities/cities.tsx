import React from "react";
import Tabs from '../../common/Tabs/tabs';
import CitiesIframe from '../citiesIframe';
import VideoTemplate from "../../common/videoTemplate/videoTemplate";
import Modal from "../modal";
const Cities = () => {
  return (
    <div>
      <Tabs
       firstProps={<VideoTemplate />}
       secondProps={<CitiesIframe/>}
       thirdProps={<VideoTemplate />}
       fourthProps={<VideoTemplate />}
       fifthProps={<Modal />}
       />
    </div>
  );
};

export default Cities;
