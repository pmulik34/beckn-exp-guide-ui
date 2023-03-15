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
        firstProps={<VideoTemplate />}
        secondProps={<HimalayasIframe />}
        thirdProps={<VideoTemplate />}
        fourthProps={<VideoTemplate />}
      />
      {/* <div
        style={{ position: "fixed", bottom: "60px", right: "40px" }}
        className="exit-icon"
      >
        <img onClick={()=>navigate('/thankYou')} src="/assets/curvedArrow.svg" alt="curvedArrow" />
      </div> */}
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
