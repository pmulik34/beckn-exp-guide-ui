import React from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";

const CityOfAfricaIframe = () => {
  return (
    <div>
      <ChooseExperience
        textURL={"/assets/CityTextes.svg"}
        iframeURL={"https://mobility-app-staging-infra.becknprotocol.io/"}
        languageEng={"English"}
      />
    </div>
  );
};

export default CityOfAfricaIframe;
