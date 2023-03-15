import React, { useState } from "react";
import Tabs from "../../common/Tabs/tabs";
import CitiesIframe from "../citiesIframe";
import VideoTemplate from "../../common/videoTemplate/videoTemplate";
import Modal from "../modal";
import { useNavigate } from "react-router-dom";
import "../Himalaya/himalayas.css";
const Cities = () => {
    const [openModal, setOpenModal] = useState(false)
    const navigate = useNavigate();
  return (
    <div style={{display:"flex", justifyContent:"center",}}>
      <Tabs
        firstProps={<VideoTemplate />}
        secondProps={<CitiesIframe />}
        thirdProps={<VideoTemplate />}
        fourthProps={<VideoTemplate />}
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

export default Cities;
