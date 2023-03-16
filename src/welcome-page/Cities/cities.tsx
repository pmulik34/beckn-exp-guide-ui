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
    console.log("Env", process.env.REACT_APP_BECKN_VIDEO_LINK)
  return (
    <div style={{display:"flex", justifyContent:"center",}}>
      <Tabs
        firstProps={<VideoTemplate mainIconUrl={process.env.REACT_APP_BECKN_VIDEO_LINK}/>}
        secondProps={<CitiesIframe />}
        thirdProps={<VideoTemplate mainIconUrl={process.env.REACT_APP_BECKN_VIDEO_LINK}/>}
        fourthProps={<VideoTemplate mainIconUrl={process.env.REACT_APP_BECKN_VIDEO_LINK}/>}
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
