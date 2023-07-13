import React from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";

const CitiesIframe = () => {
  const smartCitiesUrl = process.env.REACT_APP_SMART_CITIES_URL;
  return (
    <div>
      <ChooseExperience
        textURL={"/assets/CityTextes.svg"}
        iframeURL={smartCitiesUrl}
      />
    </div>
  );
};

export default CitiesIframe;
