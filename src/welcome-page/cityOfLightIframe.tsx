import React, { useState } from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";

const CityOfLightIframe = () => {
  const [tourismUrl, setTourismUrl] = useState(
    "https://tourism-app-infra.becknprotocol.io"
  );

  return (
    <div>
      <ChooseExperience
        textURL={"/assets/city-of-light-text.png"}
        languageEng={"english"}
        languageFra={"francais"}
        setTourismUrl={setTourismUrl}
        iframeURL={tourismUrl}
      />
    </div>
  );
};

export default CityOfLightIframe;
