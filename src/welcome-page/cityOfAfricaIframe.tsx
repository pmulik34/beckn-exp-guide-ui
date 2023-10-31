import React from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";

const CityOfAfricaIframe = () => {
  const cityofAfricaUrl = process.env.REACT_APP_CITY_OF_AFRICA_URL;
  return (
    <div>
      <ChooseExperience
        headingText="enabling"
        textURL={"/assets/smartCityGambia.svg"}
        descriptionText="discover for yourself how easy it is to  travel around Gambia."
        iframeURL={cityofAfricaUrl}
      />
    </div>
  );
};

export default CityOfAfricaIframe;
