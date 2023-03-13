import React, { useState } from "react";
import "./videoTemplate.css"
interface videoTemplatePropsModal {
  mainIconUrl?: any;
}

const videoTemplate: React.FC<videoTemplatePropsModal> = ({
  mainIconUrl,
}: videoTemplatePropsModal) => {
  return (
    <div className="video-container">
    <iframe className="videoScreen"  allow="autoplay; encrypted-media" src="/assets/Beckn-Final_27.12.mp4" width="1180" height="664"  allowFullScreen ></iframe>
  </div>
  );
};
export default videoTemplate;
