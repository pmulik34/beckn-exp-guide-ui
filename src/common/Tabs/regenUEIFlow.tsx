import React, { useEffect, useState } from "react";
import { Modal, QRCode } from "antd";
import ExitModal from "../../welcome-page/modal";
import "./tabs.css";
import VideoTemplate from "../videoTemplate/videoTemplate";
import RegenUEIInstruction from "../../welcome-page/RegenUEI/regenUEIInstruction";

const RegenUEIFlow = () => {
  const pulseEnergyWhatsappUrl =
    process.env.REACT_APP_PULSE_ENERGY_WHATSAPP_URL;
  const UEIChartFlow = process.env.REACT_APP_UEI_CHART_APP_URL;
  const sheruAppUrl = process.env.REACT_APP_SHERU_APP_URL;
  const turnoAppUrl = process.env.REACT_APP_TURNO_APP_URL;
  const [pulseEnergy, setPulseEnergy] = useState("");
  const [activeUrl, setActiveUrl] = useState(sheruAppUrl);
  const [activeButton, setActiveButton] = useState("Pulse energy");
  const [open, setOpen] = useState(false);
  const [isUEIInstructionModalOpen, setIsUEIInstructionModalOpen] =
    useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleButtonClick = (buttonName: any) => {
    setActiveButton(buttonName);
  };
  const handleInstructionModal = () => {
    setIsUEIInstructionModalOpen(true);
  };

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
    <>
      {activeButton === "Pulse energy" ? (
        <div className="QR-wrapper regenUEI_flow_QRcode">
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
      ) : (
        <div className="smartphone-wrapper regenUEI_flow_Iframe">
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
      )}
      <div className="regenUEI_flow_wrapper">
        <div className="regenUEI_flow_btn">
          <div
            onClick={handlePulseEnergy}
            className={activeButton === "Pulse energy" ? "active" : ""}
          >
            Pulse energy
          </div>
          <div
            onClick={handleSheruApp}
            className={activeButton === "Sheru App" ? "active" : ""}
          >
            Sheru App
          </div>
          <div
            onClick={handleTurnoApp}
            className={activeButton === "Turno app" ? "active" : ""}
          >
            Turno app
          </div>
        </div>
        <div className="regenUEI_flow_iframe">
          <iframe
            className="ChooseExpIframe regenUEI_flow"
            allow="clipboard-read; clipboard-write; geolocation"
            src={UEIChartFlow}
            frameBorder="0"
            allowFullScreen
            scrolling={"no"}
            width={"100%"}
            height={"100%"}
            style={{ borderRadius: "36px" }}
          />
          <div
            className={
              activeButton === "Sheru App"
                ? "instructions_btns instructions_btns_seru"
                : "instructions_btns"
            }
          >
            {activeButton === "Sheru App" && (
              <div onClick={() => {}}>
                <img
                  src="/assets/seru_demand_btn.svg"
                  alt={"seru demand icon"}
                />
              </div>
            )}
            <div onClick={handleInstructionModal}>
              <img src="/assets/instruction_icon.svg" alt={"instuction icon"} />
            </div>
            <RegenUEIInstruction
              isUEIInstructionModalOpen={isUEIInstructionModalOpen}
              setIsModalRegenUEIInstruction={setIsUEIInstructionModalOpen}
            />
            <div onClick={() => setOpen(true)}>
              <img src="/assets/playIcon_Large.svg" alt={"playIcon"} />
            </div>
            <div>
              {!openModal ? (
                <img
                  onClick={() => setOpenModal(true)}
                  src="/assets/exit-Btn_icon.svg"
                  alt="curvedArrow"
                />
              ) : (
                <ExitModal flag={openModal} pathName={"/RegenAg"} />
              )}
            </div>
          </div>
          <div className="Moneyflow_view_text">
            <span>&#8964;</span>Scroll Down to see Moneyflow Video
            <span>&#8964;</span>
          </div>
          <div className="Moneyflow_view">
            <VideoTemplate mainIconUrl="https://player.vimeo.com/video/808586015?h=aa4c79b136&amp;badge=0&amp;player_id=0&amp;app_id=58479" />
          </div>
        </div>
      </div>

      {/* /// button modal and data /// */}

      <Modal
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={"unset"}
        className="ondc_video_modal"
      >
        <VideoTemplate mainIconUrl="https://player.vimeo.com/video/808586015?h=aa4c79b136&amp;badge=0&amp;player_id=0&amp;app_id=58479" />
      </Modal>
    </>
  );
};

export default RegenUEIFlow;
