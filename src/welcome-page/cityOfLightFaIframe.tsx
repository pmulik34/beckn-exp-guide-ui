import React, { useState } from "react";
import ChooseExpFa from "../common/Tabs/chooseExpFa";

const CityOfLightFaIframe = () => {
  const cityOfLightUrlFa = process.env.REACT_APP_CITY_OF_LIGHT_FRENCH_URL;

  const [tourismUrlFa, setTourismUrlFa] = useState(cityOfLightUrlFa);

  return (
    <div>
      <ChooseExpFa
        textURL={"/assets/city-of-light-text.png"}
        languageEng={"english"}
        languageFra={"français"}
        setTourismUrl={setTourismUrlFa}
        iframeURL={tourismUrlFa}
      />
    </div>
  );
};

export default CityOfLightFaIframe;
