import React, { useState } from "react";
import "./videoTemplate.css";
interface videoTemplatePropsModal {
  mainIconUrl?: any;
}

const VideoTemplate: React.FC<videoTemplatePropsModal> = ({
  mainIconUrl,
}: videoTemplatePropsModal) => {
  console.log("first", mainIconUrl);
  return (
    <div className="video-container">
      {/* <iframe
        className="videoScreen"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        // allow="autoplay; encrypted-media"
        // src="/assets/Beckn-Final_27.12.mp4"
        src={mainIconUrl}
        sandbox="allow-same-origin"
        width="1180"
        height="664"
        allowFullScreen
      ></iframe> */}
      {/* <iframe
        src={"https://player.vimeo.com/video/808588440?h=dca4fb7ac7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}
        allow="fullscreen; picture-in-picture allowfullscreen"
        title="WWoB_TWH"
        sandbox="allow-same-origin"
        width="1180"
        height="664"
        // allowFullScreen
        // frameBorder="0"
        loading="lazy"
        
      ></iframe> */}

      <embed
        // src="https://player.vimeo.com/video/808588440?h=dca4fb7ac7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        src={mainIconUrl}
        // frameBorder="0"
        // allow="fullscreen; picture-in-picture allowfullscreen"
        // sandbox="allow-same-origin"
        width="1180"
        height="664"
        // allowFullScreen
        // title="WWoB_TWH"
        type="video/webm"
      ></embed>
    </div>
  );
};
export default VideoTemplate;
