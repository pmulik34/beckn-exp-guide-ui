import React, { useState } from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";

const PcmIframe = () => {
  const [openPcmLang, setOpenPcmLang] = useState("");
  return (
    <div>
      <ChooseExperience
        headingText="enriching "
        textURL={"/assets/PCMtext.svg"}
        descriptionText="see how you can quickly reach your event venue using the pass Culture app and Paris' mobility network."
        btmHeading="with mobility"
        setTourismUrl={setOpenPcmLang}
        languageEng={"english"}
        languageFra={"français"}
      />
    </div>
  );
};

export default PcmIframe;
