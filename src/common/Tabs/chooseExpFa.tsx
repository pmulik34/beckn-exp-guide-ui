import { QRCode, Tabs } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { selectExpModalProps } from "./chooseExperience";
import TabsFa from "./tabsFa";

const ChooseExpFa: React.FC<selectExpModalProps> = ({
  textURL,
  iframeURL,
  languageEng,
  languageFra,
  setTourismUrl,
}: selectExpModalProps) => {
  const [text, setText] = React.useState(
    "https://pcm-apk.becknprotocol.io/pcm-apk/NammaYatri/AllianceTaxis.apk"
  );
  const cityOfAfrica = localStorage.getItem("name") === "cityOfAfrica";
  const OSC = localStorage.getItem("name") === "OSC";
  const PCM = localStorage.getItem("name") === "PCM";
  const navigate = useNavigate();

  const [lang, setLang] = useState("francais");

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
                setTourismUrl!(`${OSC ? navigate("/OSC") : navigate("/PCM")}`);
              }}
              style={{
                paddingRight: "8px",
                cursor: "pointer",
                fontWeight: `${lang === "francais" ? "300" : "unset"}`,
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
                setTourismUrl!(`${OSC ? "" : ""}`);
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
                    <span style={{ color: "#696868", wordBreak: "break-word" }}>
                      application de
                      <br />
                      démonstration du pass <br />
                      Culture
                    </span>
                  </div>
                ),
                key: "1",
                className: "",
                children: (
                  <div className="QR_custom">
                    <QRCode className="QR_code_PCM_cust" value={text || "-"} />
                    <p>Scannez pour voir comment!</p>
                  </div>
                ),
              },
              {
                label: (
                  <div className="" style={{ display: "flex" }}>
                    <div>
                      <span style={{ color: "#696868" }}>
                        application côté
                        <br />
                        conducteur
                      </span>
                    </div>
                  </div>
                ),
                key: "2",
                className: "",
                children: (
                  <div className="QR_custom">
                    <QRCode className="QR_code_PCM_cust" value={text || "-"} />
                    <p>Scannez pour voir comment!</p>
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

export default ChooseExpFa;
