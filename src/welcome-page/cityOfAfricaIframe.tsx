import React from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";

const CityOfAfricaIframe = () => {
  return (
    <div>
      <ChooseExperience
        textURL={"/assets/smartCityGambia.svg"}
        iframeURL={"https://mobility-app-staging-infra.becknprotocol.io/"}
      />
    </div>
  );
};

export default CityOfAfricaIframe;
