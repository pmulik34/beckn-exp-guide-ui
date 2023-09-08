import { Button, QRCode, Tabs } from "antd";
import { useState } from "react";
import PcmInstructionModalDriver from "../instructionModal/PcmInstructionModalDriver";
import PcmInstructionModalPc from "../instructionModal/PcmInstructionModalPc";

const Pcm = () => {
  const pcmDriverUrl = process.env.REACT_APP_PCM_DRIVER_URL;
  const pcmPcAppUrl = process.env.REACT_APP_PCM_PC_APP_URL;

  const [language, setLanguage] = useState("english");

  const handleLanguageEn = () => {
    setLanguage("english");
  };
  const handleLanguageFa = () => {
    setLanguage("france");
  };
  return (
    <div
      className="PCM_wrapper"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div className="text_wrapper">
        <div>
          <p className="heading1" style={{ marginBottom: "-15px" }}>
            enriching{" "}
          </p>
          <img className="heading2" src="/assets/Pcm.svg" />
          <p className="heading3" style={{ marginTop: "-10px" }}>
            with mobility
          </p>
          <p className="description_text">
            see how you can quickly reach your event venue using the pass
            Culture app and Paris' mobility network.
          </p>
        </div>
        <div className="languages_tab">
          <div
            className={`english ${language === "english" ? "active" : ""}`}
            onClick={handleLanguageEn}
          >
            english
          </div>
          <div>|</div>
          <div
            className={`france ${language === "france" ? "active" : ""}`}
            onClick={handleLanguageFa}
          >
            français
          </div>
        </div>
      </div>
      <div className="QR-wrapper">
        <Tabs
          className={"QR_Innr"}
          defaultActiveKey="1"
          items={[
            {
              label: (
                <div>
                  <span style={{ color: "#696868" }}>
                    pass{" "}
                    <span style={{ textTransform: "capitalize" }}>Culture</span>
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
                  <p style={{ textAlign: "center" }}>scan to see how!</p>{" "}
                  <PcmInstructionModalPc />
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
                  <PcmInstructionModalDriver />
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Pcm;
