import React, { useState } from "react";
import Tabs from "../../common/Tabs/tabs";
import HimalayasIframe from "../himalayasIframe";
import VideoTemplate from "../../common/videoTemplate/videoTemplate";
import Modal from "../modal";
import { useNavigate } from "react-router-dom";
import "./himalayas.css";

const Himalayas = () => {
    const [openModal, setOpenModal] = useState(false)
    const navigate = useNavigate();
  return (
    <div style={{display:"flex", justifyContent:"center",}}>
      <Tabs
        firstProps={<VideoTemplate mainIconUrl="https://player.vimeo.com/video/808588440?h=dca4fb7ac7&amp;badge=0&amp;player_id=0&amp;app_id=58479"/>}
        secondProps={<HimalayasIframe />}
        thirdProps={<VideoTemplate mainIconUrl="https://player.vimeo.com/video/808586015?h=aa4c79b136&amp;badge=0&amp;player_id=0&amp;app_id=58479"/>}
        fourthProps={<VideoTemplate  mainIconUrl="https://player.vimeo.com/video/808586515?h=f7735ffff9&amp;badge=0&amp;player_id=0&amp;app_id=58479"/>}
      />
      <div className="exit-icon">
        {!openModal?
        <img 
        onClick={()=>setOpenModal(true)}
         src="/assets/curvedArrow.svg" alt="curvedArrow" />
        :
        <Modal flag={openModal} pathName={'/ThankYou'}/>
    }
      </div>
    </div>
  );
};

export default Himalayas;
