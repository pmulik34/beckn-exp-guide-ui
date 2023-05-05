import React from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";

const CityOfLightIframe = () => {
  return (
    <div>
      <ChooseExperience
        textURL={"/assets/city-of-light-text.png"}
        languageEng={"English"}
        languageFra={"Francais"}
        iframeURL={"https://tourism-app-staging-infra.becknprotocol.io"}
      />
    </div>
  );
};

export default CityOfLightIframe;
