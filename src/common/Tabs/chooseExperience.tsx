import React from "react";
import "./tabs.css";
interface selectExpModalProps {
  textURL: string;
  iframeURL: string;
}
const chooseExperience: React.FC<selectExpModalProps> = ({
  textURL,
  iframeURL,
}: selectExpModalProps) => {
  return (
    <div
      className="tab-wrappper-content"
    >
      <div>
        {/* "/assets/text.svg" */}
        <img src={textURL} alt="" />
      </div>
      <div className="smartphone-wrapper">
        <div className="smartphone">
          <div className="content">
             {/* geolocation */}
            <iframe className="ChooseExpIframe"
              allow="clipboard-read; clipboard-write;"
              // referrerPolicy="no-referrer"
              // sandbox="allow-same-origin"
              // name="my-iframe"
              src={iframeURL}
              frameBorder="0"
              allowFullScreen
              width={"375px"}
              height={"667px"}
              style={{ borderRadius: "36px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default chooseExperience;