import React, { useState } from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";
import ChooseExpFa from "../common/Tabs/chooseExpFa";

const PcmIframeFa = () => {
  const [openPcmLang, setOpenPcmLang] = useState("");
  return (
    <div>
      <ChooseExpFa
        headingText="enrichissant"
        textURL={"/assets/PCMtext.svg"}
        btmHeading="avec mobilité"
        descriptionText="Découvrez comment vous pouvez vous rendre rapidement sur le lieu de votre événement grâce à l'application pass Culture et au réseau de mobilité de Paris."
        setTourismUrl={setOpenPcmLang}
        languageEng={"english"}
        languageFra={"français"}
      />
    </div>
  );
};

export default PcmIframeFa;
