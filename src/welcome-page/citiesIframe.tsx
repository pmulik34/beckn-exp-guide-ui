import React from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";

const CitiesIframe = () => {
  return (
    <div>
      <ChooseExperience
        textURL={"/assets/CityTextes.svg"}
        iframeURL={"https://travelbuddy.becknprotocol.io/"}
      />
    </div>
  );
};

export default CitiesIframe;
