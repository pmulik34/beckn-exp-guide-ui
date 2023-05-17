import React from "react";
import "./tabs.css";
interface selectExpModalProps {
  textURL: string;
  iframeURL: string | undefined;
  languageEng?: string;
  languageFra?: string;
  setTourismUrl?: Function;
}
const ChooseExperience: React.FC<selectExpModalProps> = ({
  textURL,
  iframeURL,
  languageEng,
  languageFra,
  setTourismUrl,
}: selectExpModalProps) => {
  console.log(localStorage.getItem("name"));
  return (
    <div className="tab-wrappper-content">
      <div>
        <img src={textURL} alt="header-content-text" />{" "}
        <div style={{ padding: "10px 0", fontSize: "16px" }}>
          <span
            onClick={() =>
              setTourismUrl!(
                "https://tourism-app-staging-infra.becknprotocol.io"
              )
            }
            style={{ paddingRight: "8px", cursor: "pointer" }}
          >
            {languageEng}
          </span>
          |
          <span style={{ paddingLeft: "8px", cursor: "pointer" }}>
            <a
              style={{ color: "#000" }}
              href="https://experience-guide-french-infra.becknprotocol.io/cityOfLight"
              target="_self"
              rel="noreferrer"
            >
              {languageFra}
            </a>
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
