import { QRCode, Space, Tabs } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./tabs.css";
export interface selectExpModalProps {
  textURL: string;
  iframeURL?: string | undefined;
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
  const [driverApk, setDriverApk] = React.useState(
    "https://pcm-apk.becknprotocol.io/pcm-apk/NammaYatri/AllianceTaxis.apk"
  );
  const [text, setText] = React.useState(
    "https://pcm-apk.becknprotocol.io/pcm-apk/PCMApp-Dev.apk"
  );
  const cityOfAfrica = localStorage.getItem("name") === "cityOfAfrica";
  const OSC = localStorage.getItem("name") === "OSC";
  const PCM = localStorage.getItem("name") === "PCM";
  const navigate = useNavigate();

  const [lang, setLang] = useState("english");

  return (
    <div
      className={
        PCM ? "tab-wrappper-content PCM_details" : "tab-wrappper-content"
      }
    >
      <div>
        <img src={textURL} alt="header-content-text" />

        {!cityOfAfrica ? (
          <div
            style={{
              padding: "10px 0",
              fontSize: "16px",
            }}
          >
            <span
              onClick={(e: any) => {
                setLang(e.target.textContent);
                setTourismUrl!(
                  `${
                    OSC
                      ? "https://osm-dev.becknprotocol.io/"
                      : "https://tourism-app-staging-infra.becknprotocol.io"
                  }`
                );
              }}
              style={{
                paddingRight: "8px",
                cursor: "pointer",
                fontWeight: `${lang === "english" ? "unset" : "300"}`,
              }}
            >
              {languageEng}
            </span>
            |
            <span
              style={{
                paddingLeft: "8px",
                fontWeight: `${lang === "francais" ? "unset" : "300"}`,
                cursor: "pointer",
              }}
              onClick={(e: any) => {
                setLang(e.target.textContent);
                setTourismUrl!(
                  `${
                    OSC ? navigate("/OSC-Fa") : PCM ? navigate("/PCM-Fa") : ""
                  }`
                );
              }}
            >
              {!PCM && !OSC ? (
                <a
                  style={{ color: "#000" }}
                  href={
                    "https://experience-guide-french-infra.becknprotocol.io/cityOfLight"
                  }
                  target="_self"
                  rel="noreferrer"
                >
                  {languageFra}
                </a>
              ) : (
                `${languageFra}`
              )}
            </span>
          </div>
        ) : null}
      </div>

      {PCM ? (
        <div className="QR-wrapper">
          <Tabs
            className={"QR_Innr"}
            defaultActiveKey="1"
            items={[
              {
                label: (
                  <div>
                    <span style={{ color: "#696868" }}>
                      pass Culture demo app
                    </span>
                  </div>
                ),
                key: "1",
                className: "",
                children: (
                  <div className="QR_custom">
                    <QRCode className="QR_code_PCM_cust" value={text || "-"} />
                    <p>scan to see how!</p>
                  </div>
                ),
              },
              {
                label: (
                  <div className="" style={{ display: "flex" }}>
                    <div>
                      <span style={{ color: "#696868" }}>driver-side app</span>
                    </div>
                  </div>
                ),
                key: "2",
                className: "",
                children: (
                  <div className="QR_custom">
                    <QRCode
                      className="QR_code_PCM_cust"
                      value={driverApk || "-"}
                    />
                    <p>scan to see how!</p>
                  </div>
                ),
              },
            ]}
          />
        </div>
      ) : (
        <div className="smartphone-wrapper">
          <div className="smartphone">
            <div className="content">
              <iframe
                className="ChooseExpIframe"
                allow="clipboard-read; clipboard-write; geolocation"
                src={iframeURL}
                frameBorder="0"
                allowFullScreen
                scrolling={!OSC ? "no" : "yes"}
                width={"100%"}
                height={"100%"}
                style={{ borderRadius: "36px" }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChooseExperience;
