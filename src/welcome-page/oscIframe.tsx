import React, { useState } from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";

const OscIframe = () => {
  const osmEngUrl = process.env.REACT_APP_OSM_ENG_URL;
  const [openStreetCom, setOpenStreetCom] = useState(osmEngUrl);
  return (
    <div>
      <ChooseExperience
        textURL={"/assets/OSCtext.svg"}
        setTourismUrl={setOpenStreetCom}
        iframeURL={openStreetCom}
        languageEng={"english"}
        languageFra={"francais"}
      />
    </div>
  );
};

export default OscIframe;
