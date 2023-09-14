import React, { useState } from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";
import ChooseExpFa from "../common/Tabs/chooseExpFa";

const PcmIframeFa = () => {
  const [openPcmLang, setOpenPcmLang] = useState("");
  return (
    <div>
      <ChooseExpFa
        textURL={"/assets/PCMtextFa.svg"}
        setTourismUrl={setOpenPcmLang}
        languageEng={"english"}
        languageFra={"français"}
      />
    </div>
  );
};

export default PcmIframeFa;
