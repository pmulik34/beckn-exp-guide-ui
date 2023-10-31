import React, { useState } from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";

const CityOfLightIframe = () => {
  const cityOfLightUrl = process.env.REACT_APP_TOURISM_URL;

  const [tourismUrl, setTourismUrl] = useState(cityOfLightUrl);

  return (
    <div>
      <ChooseExperience
        headingText="experience the"
        textURL={"/assets/city-of-light-text.svg"}
        descriptionText="experience for yourself how seamless a trip to Paris can be."
        languageEng={"english"}
        languageFra={"français"}
        setTourismUrl={setTourismUrl}
        iframeURL={tourismUrl}
      />
    </div>
  );
};

export default CityOfLightIframe;
