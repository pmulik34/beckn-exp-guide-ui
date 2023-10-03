import React, { useState } from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";

const UeiIframe = () => {
  const sheruAppUrl = process.env.REACT_APP_SHERU_APP_URL;
  const pulseEnergyUrl = process.env.REACT_APP_PULSE_ENERGY_URL;
  const turnoAppUrl = process.env.REACT_APP_TURNO_APP_URL;
  const [activeButton, setActiveButton] = useState("for_sheru_app");
  const [activeUrl, setActiveUrl] = useState(sheruAppUrl);

  const handleSheruApp = (e: any) => {
    setActiveButton("for_sheru_app");
    setActiveUrl(sheruAppUrl);
  };
  const handlePulseEnergy = (e: any) => {
    setActiveButton("for_pulse_energy");
    setActiveUrl(pulseEnergyUrl);
  };
  const handleTurnoApp = (e: any) => {
    setActiveButton("for_turno_app");
    setActiveUrl(turnoAppUrl);
  };
  return (
    <div>
      <ChooseExperience
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
