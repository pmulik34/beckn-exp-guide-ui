import React, { useEffect } from "react";
import "./tabs.css";
interface selectExpModalProps {
  textURL: string;
  iframeURL: string | undefined;
  languageEng?: string;
  languageFra?: string;
}
const ChooseExperience: React.FC<selectExpModalProps> = ({
  textURL,
  iframeURL,
  languageEng,
  languageFra,
}: selectExpModalProps) => {
  return (
    <div className="tab-wrappper-content">
      <div>
        <img src={textURL} alt="header-content-text" />{" "}
        <div style={{ padding: "10px 0", fontSize: "16px" }}>
          <span style={{ paddingRight: "8px" }}>{languageEng}</span>|
          <span style={{ paddingLeft: "8px", fontWeight: "300" }}>
            {languageFra}
          </span>
        </div>
      </div>

      <div className="smartphone-wrapper">
        <div className="smartphone">
          <div className="content">
            <iframe
              className="ChooseExpIframe"
              allow="clipboard-read; clipboard-write; geolocation"
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

export default ChooseExperience;
