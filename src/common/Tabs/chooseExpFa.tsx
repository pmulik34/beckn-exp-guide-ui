import { QRCode, Button, Modal, Tabs } from "antd";
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
  retailsModal,
}: selectExpModalProps) => {
  const pcmDriverUrl = process.env.REACT_APP_PCM_DRIVER_URL;
  const pcmPcAppUrl = process.env.REACT_APP_PCM_PC_APP_URL;
  const cityOfLightFaUrl = process.env.REACT_APP_CITY_OF_LIGHT_FRENCH_URL;

  const cityOfAfrica = localStorage.getItem("name") === "cityOfAfrica";
  const OSC = localStorage.getItem("name") === "OSC";
  const PCM = localStorage.getItem("name") === "PCM";
  const navigate = useNavigate();

  const [lang, setLang] = useState("francais");
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
                  mode d'emploi
                  <img
                    style={{ paddingLeft: "5px" }}
                    src="/assets/arrow_back.svg"
                  />
                </Button>
                <Modal
                  className="PCM_modal"
                  title="Suivez les étapes suivantes pour une expérience optimale!"
                  open={isModalOpenOSC}
                  onCancel={handleCancelOSC}
                >
                  <img
                    style={{ width: "100%" }}
                    src="/assets/OSMmodal_french.svg"
                  />
                </Modal>
              </>
            ) : (
              <>
                <Button type="primary" onClick={showModalOSCretailer}>
                  mode d'emploi
                  <img
                    style={{ paddingLeft: "5px" }}
                    src="/assets/arrow_back.svg"
                  />
                </Button>
                <Modal
                  className="PCM_modal"
                  title="suivez ces étapes pour une expérience optimale en tant que vendeur!"
                  open={isModalOpenOSCRetailer}
                  onCancel={handleCancelRetailer}
                >
                  <img
                    style={{ width: "100%" }}
                    src="/assets/BPPmodal_french.svg"
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
                    <span style={{ color: "#696868", wordBreak: "break-word" }}>
                      pass Culture
                    </span>
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
                    <p>scannez pour voir comment! </p>
                    <Button type="primary" onClick={showModalPC}>
                      mode d'emploi
                      <img
                        style={{ paddingLeft: "5px" }}
                        src="/assets/arrow_back.svg"
                      />
                    </Button>
                    <Modal
                      className="PCM_modal"
                      title="suivez ces étapes pour que votre expérience en tant que passager soit la meilleure possible !"
                      open={isModalOpenPC}
                      onCancel={handleCancelPC}
                    >
                      <img
                        style={{ width: "100%" }}
                        src="/assets/PCmodal_french.svg"
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
                    <p>scannez pour voir comment! </p>
                    <Button type="primary" onClick={showModalDriver}>
                      mode d'emploi
                      <img
                        style={{ paddingLeft: "5px" }}
                        src="/assets/arrow_back.svg"
                      />
                    </Button>
                    <Modal
                      className="PCM_modal"
                      title="suivez ces étapes pour que votre expérience de conducteur soit la meilleure possible !"
                      open={isModalOpenDriver}
                      // onOk={handleOk}
                      onCancel={handleCancelDriver}
                    >
                      <img
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "0 auto",
                        }}
                        src="/assets/driverModal_french.svg"
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

export default ChooseExpFa;
