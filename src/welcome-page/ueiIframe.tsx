import React, { useEffect, useState } from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";

const UeiIframe = () => {
  const sheruAppUrl = process.env.REACT_APP_SHERU_APP_URL;
  const turnoAppUrl = process.env.REACT_APP_TURNO_APP_URL;
  const [activeButton, setActiveButton] = useState("for_pulse_energy");
  const [pulseEnergy, setPulseEnergy] = useState("");
  const [activeUrl, setActiveUrl] = useState(sheruAppUrl);

  const handleSheruApp = (e: any) => {
    setActiveButton("for_sheru_app");
    setActiveUrl(sheruAppUrl);
    setPulseEnergy("");
  };
  const handlePulseEnergy = (e: any) => {
    setActiveButton("for_pulse_energy");
    setPulseEnergy("pulse_energy");
  };
  const handleTurnoApp = (e: any) => {
    setActiveButton("for_turno_app");
    setActiveUrl(turnoAppUrl);
    setPulseEnergy("");
  };
  useEffect(() => {
    setPulseEnergy("pulse_energy");
  }, []);
  return (
    <div>
      <ChooseExperience
        pulseEnergy={pulseEnergy}
        textURL={"/assets/UEI_text.svg"}
        iframeURL={activeUrl}
      />
      <div className="UEI_tab_change">
        <div
          className={`for_pulse_energy ${
            activeButton === "for_pulse_energy" ? "active" : ""
          }`}
          onClick={handlePulseEnergy}
        >
          Pulse energy
        </div>
        <div
          className={`for_sheru_app ${
            activeButton === "for_sheru_app" ? "active" : ""
          }`}
          onClick={handleSheruApp}
        >
          Sheru App
        </div>

        <div
          className={`for_turno_app ${
            activeButton === "for_turno_app" ? "active" : ""
          }`}
          onClick={handleTurnoApp}
        >
          Turno App
        </div>
      </div>
    </div>
  );
};

export default UeiIframe;
