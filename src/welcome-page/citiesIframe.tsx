import React from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";

const CitiesIframe = () => {
  return (
    <div>
      <ChooseExperience
        textURL={"/assets/citiesText.svg"}
        iframeURL={process.env.REACT_APP_CITIES_URL}
      />
    </div>
  );
};

export default CitiesIframe;
