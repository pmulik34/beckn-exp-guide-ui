import React, { useRef } from "react";
import "./videoTemplate.css";
interface videoTemplatePropsModal {
  mainIconUrl?: any;
  id?: string;
}
const VideoTemplate: React.FC<videoTemplatePropsModal> = ({
  mainIconUrl,
}: videoTemplatePropsModal) => {
  return (
    <div className="video-container tabcontent">
      <iframe
        // ref={video}
        id="myVideoId"
        width="1080"
        height="664"
        src={mainIconUrl}
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default VideoTemplate;
