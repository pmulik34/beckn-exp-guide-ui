import { QRCode, Button, Modal, Tabs } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./tabs.css";
export interface selectExpModalProps {
  textURL: string;
  iframeURL?: string | undefined;
  languageEng?: string;
  languageFra?: string;
  setTourismUrl?: Function;
  retailsModal?: boolean;
}
const ChooseExperience: React.FC<selectExpModalProps> = ({
  textURL,
  iframeURL,
  languageEng,
  languageFra,
  setTourismUrl,
  retailsModal,
}: selectExpModalProps) => {
  const osmEngUrl = process.env.REACT_APP_OSM_ENG_URL;
  const pcmDriverUrl = process.env.REACT_APP_PCM_DRIVER_URL;
  const pcmPcAppUrl = process.env.REACT_APP_PCM_PC_APP_URL;
  const cityOfLightFaUrl = process.env.REACT_APP_CITY_OF_LIGHT_FRENCH_URL;
  const tourismAppStagingInfraUrl =
    process.env.REACT_APP_TOURISM_APP_STAGING_INFRA_URL;

  const cityOfAfrica = localStorage.getItem("name") === "cityOfAfrica";
  const cityOfLight = localStorage.getItem("name") === "cityOfLight";
  const OSC = localStorage.getItem("name") === "OSC";
  const PCM = localStorage.getItem("name") === "PCM";
  const navigate = useNavigate();

  const [lang, setLang] = useState("english");
  const [isModalOpenOSC, setIsModalOpenOSC] = useState(false);
  const [isModalOpenPC, setIsModalOpenPC] = useState(false);
  const [isModalOpenDriver, setSsModalOpenDriver] = useState(false);
  const [isModalOpenOSCRetailer, setIsModalOpenOSCRetailer] = useState(false);

  const showModalPC = () => {
    setIsModalOpenPC(true);
  };
  const showModalDriver = () => {
    setSsModalOpenDriver(true);
  };
  const showModalOSC = () => {
    setIsModalOpenOSC(true);
  };
  const showModalOSCretailer = () => {
    setIsModalOpenOSCRetailer(true);
  };

  const handleCancelPC = () => {
    setIsModalOpenPC(false);
  };
  const handleCancelDriver = () => {
    setSsModalOpenDriver(false);
  };
  const handleCancelOSC = () => {
    setIsModalOpenOSC(false);
  };
  const handleCancelRetailer = () => {
    setIsModalOpenOSCRetailer(false);
  };

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
                  `${OSC ? { osmEngUrl } : { tourismAppStagingInfraUrl }}`
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
                  href={cityOfLightFaUrl}
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
        {OSC ? (
          <div className="PCM_modal OSM_custom">
            {!retailsModal ? (
              <>
                <Button type="primary" onClick={showModalOSC}>
                  instructions
                  <img
                    style={{ paddingLeft: "5px" }}
                    src="/assets/arrow_back.svg"
                  />
                </Button>
                <Modal
                  className="PCM_modal"
                  title="Follow these steps for the best possible experience as a customer!"
                  open={isModalOpenOSC}
                  onCancel={handleCancelOSC}
                >
                  <img
                    style={{ width: "100%" }}
                    src="/assets/OSMmodal-img.svg"
                  />
                </Modal>
              </>
            ) : (
              <>
                <Button type="primary" onClick={showModalOSCretailer}>
                  instructions
                  <img
                    style={{ paddingLeft: "5px" }}
                    src="/assets/arrow_back.svg"
                  />
                </Button>
                <Modal
                  className="PCM_modal"
                  title="Follow these steps for the best possible experience as a seller!"
                  open={isModalOpenOSCRetailer}
                  onCancel={handleCancelRetailer}
                >
                  <img
                    style={{ width: "100%" }}
                    src="/assets/BPPmodal-img.svg"
                  />
                </Modal>
              </>
            )}
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
                    <span style={{ color: "#696868" }}>pass Culture</span>
                  </div>
                ),
                key: "1",
                className: "",
                children: (
                  <div className="QR_custom">
                    <QRCode
                      className="QR_code_PCM_cust"
                      value={pcmPcAppUrl || "-"}
                    />
                    <p style={{ textAlign: "center" }}>scan to see how!</p>
                    <Button type="primary" onClick={showModalPC}>
                      instructions
                      <img
                        style={{ paddingLeft: "5px" }}
                        src="/assets/arrow_back.svg"
                      />
                    </Button>
                    <Modal
                      className="PCM_modal"
                      title="follow these steps for the best possible experience as a passenger!"
                      open={isModalOpenPC}
                      onCancel={handleCancelPC}
                    >
                      <img
                        style={{ width: "100%" }}
                        src="/assets/PCmodal-img.svg"
                      />
                    </Modal>
                  </div>
                ),
              },
              {
                label: (
                  <div className="" style={{ display: "flex" }}>
                    <div>
                      <span style={{ color: "#696868" }}>alliance taxi</span>
                    </div>
                  </div>
                ),
                key: "2",
                className: "",
                children: (
                  <div className="QR_custom">
                    <QRCode
                      className="QR_code_PCM_cust"
                      value={pcmDriverUrl || "-"}
                    />
                    <p>scan to see how!</p>
                    <Button type="primary" onClick={showModalDriver}>
                      instructions
                      <img
                        style={{ paddingLeft: "5px" }}
                        src="/assets/arrow_back.svg"
                      />
                    </Button>
                    <Modal
                      className="PCM_modal"
                      title="Follow these steps for the best possible experience as a driver!"
                      open={isModalOpenDriver}
                      onCancel={handleCancelDriver}
                    >
                      <img
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "0 auto",
                        }}
                        src="/assets/driverModal-img.svg"
                      />
                    </Modal>
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
