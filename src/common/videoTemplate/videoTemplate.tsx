import React, { useState } from "react";
import "./videoTemplate.css";
interface videoTemplatePropsModal {
  mainIconUrl?: any;
}

const videoTemplate: React.FC<videoTemplatePropsModal> = ({
  mainIconUrl,
}: videoTemplatePropsModal) => {
  return (
    <div className="video-container">
      <iframe
        className="videoScreen"
        src={mainIconUrl}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        // allow="autoplay; encrypted-media"
        sandbox="allow-same-origin"
        width="1180"
        height="664"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default videoTemplate;
