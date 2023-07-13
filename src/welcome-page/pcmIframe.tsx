import React, { useState } from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";

const PcmIframe = () => {
  const [openPcmLang, setOpenPcmLang] = useState("");
  return (
    <div>
      <ChooseExperience
        textURL={"/assets/PCMtext.svg"}
        setTourismUrl={setOpenPcmLang}
        languageEng={"english"}
        languageFra={"francais"}
      />
    </div>
  );
};

export default PcmIframe;
