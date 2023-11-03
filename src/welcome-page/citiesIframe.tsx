import React from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";

const CitiesIframe = () => {
  const smartCitiesUrl = process.env.REACT_APP_SMART_CITIES_URL;
  return (
    <div>
      <ChooseExperience
        headingText="enabling"
        textURL={"/assets/CityTextes.svg"}
        descriptionText="see for yourself how dynamic information enable smart cities."
        iframeURL={smartCitiesUrl}
      />
    </div>
  );
};

export default CitiesIframe;
