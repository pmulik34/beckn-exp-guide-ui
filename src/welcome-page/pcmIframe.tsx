import React from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";

const pcmIframe = () => {
  return (
    <div>
      <ChooseExperience
        textURL={"/assets/PCMtext.svg"}
        languageEng={"English"}
        // languageFra={"Francais"}
      />
    </div>
  );
};

export default pcmIframe;
