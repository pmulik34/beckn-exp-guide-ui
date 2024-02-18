import { QRCode } from "antd";
import React, { useEffect, useState } from "react";
import VideoTemplate from "../common/videoTemplate/videoTemplate";

const RegenUEINewFlow = () => {
  const pulseEnergyWhatsappUrl =
    process.env.REACT_APP_PULSE_ENERGY_WHATSAPP_URL;
  const sheruAppUrl = process.env.REACT_APP_SHERU_APP_URL;
  const turnoAppUrl = process.env.REACT_APP_TURNO_APP_URL;
  const pulseEnergyVideoUrl = process.env.REACT_APP_PULSE_ENERGY_VIDEO_URL;
  const [pulseEnergy, setPulseEnergy] = useState("");
  const [activeUrl, setActiveUrl] = useState(sheruAppUrl);
  const [activeVideoUrl, setActiveVideoUrl] = useState(pulseEnergyVideoUrl);
  const [activeButton, setActiveButton] = useState("Pulse energy");

  const handleSheruApp = (e: any) => {
    setActiveButton("Sheru App");
    setActiveUrl(sheruAppUrl);
    setPulseEnergy("");
  };
  const handlePulseEnergy = (e: any) => {
    setActiveButton("Pulse energy");
    setPulseEnergy("Pulse energy");
  };
  const handleTurnoApp = (e: any) => {
    setActiveButton("Turno app");
    setActiveUrl(turnoAppUrl);
    setPulseEnergy("");
  };
  useEffect(() => {
    setPulseEnergy("Pulse energy");
  }, []);

  return (
    <div className="UEI_NewFlow_container">
      <div
        className={
          activeButton === "Pulse energy"
            ? "UEI_NewFlow_container_innr UEI_QrFlow_container_innr"
            : "UEI_NewFlow_container_innr"
        }
      >
        <div className="beckn_logo_UEI">
          <img src="/assets/becknImageNew.svg" alt="beckn logo" />
          <div className="UEI_text">
            welcome to the unified energy interface
          </div>
        </div>
        <div className="UEI_newFlow">
          {activeButton === "Pulse energy" ? (
            <div className="regenUEI_flow_QRcode_new_flow_wrrp">
              <div className="QR-wrapper regenUEI_flow_QRcode_new_flow">
                <div className="QR_custom QR_custom_pulse_energy">
                  <QRCode
                    className="QR_code_pulse_energy regenUEI_flow_QR"
                    value={pulseEnergyWhatsappUrl || "_"}
                  />
                  <p style={{ paddingBottom: "15px" }}>Or</p>
                  <a
                    href={pulseEnergyWhatsappUrl || "_"}
                    target={"/"}
                    style={{ cursor: "pointer" }}
                  >
                    <img src="/assets/whatsappImg.svg" />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="smartphone-wrapper">
                <div className="smartphone">
                  <div className="content">
                    <iframe
                      //@ts-ignore
                      className="ChooseExpIframe"
                      allow="clipboard-read; clipboard-write; geolocation"
                      src={activeUrl}
                      frameBorder="0"
                      allowFullScreen
                      scrolling={"no"}
                      width={"100%"}
                      height={"100%"}
                      style={{ borderRadius: "36px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="UEI_newFlow_right_section">
            <div className="regenUEI_flow_btn UEI_newFlow_btn">
              <div
                onClick={handlePulseEnergy}
                className={
                  activeButton === "Pulse energy"
                    ? "active UEI_new_btn"
                    : "UEI_new_btn"
                }
              >
                Pulse energy
              </div>
              <div
                onClick={handleSheruApp}
                className={
                  activeButton === "Sheru App"
                    ? "active UEI_new_btn"
                    : "UEI_new_btn"
                }
              >
                Sheru App
              </div>
              <div
                onClick={handleTurnoApp}
                className={
                  activeButton === "Turno app"
                    ? "active UEI_new_btn"
                    : "UEI_new_btn"
                }
              >
                Turno app
              </div>
            </div>
            <VideoTemplate mainIconUrl={activeVideoUrl} />
            <div className="UEI_footer_new">
              <div className="UEI_footer_icons">
                <img src="/assets/UEI_Icon_Img.svg" alt="UEI logo" />
              </div>
              <div className="UEI_footer_icons">
                <img src="/assets/pulseIconImage.svg" />
                Pulse Energy
              </div>
              <div className="UEI_footer_icons">
                <img src="/assets/sheruIconImg.svg" />
              </div>
              <div className="UEI_footer_icons">
                <img src="/assets/kazamIconImg.svg" />
                Kazam
              </div>
              <div className="UEI_footer_icons">
                <img src="/assets/turnoIconImg.svg" />
                Turno
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegenUEINewFlow;
