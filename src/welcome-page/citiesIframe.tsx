import React from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";

const CitiesIframe = () => {
  return (
    <div>
      <ChooseExperience
        textURL={"/assets/citiesText.svg"}
        iframeURL={"https://retail-app.becknprotocol.io/"}
      />
    </div>
  );
};

export default CitiesIframe;
