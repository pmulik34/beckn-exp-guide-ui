import React, { useState } from "react";
import ChooseExpFa from "../common/Tabs/chooseExpFa";

const OscIframe = () => {
  const osmFaUrl = process.env.REACT_APP_OSM_FAR_URL;
  const [openStreetCom, setOpenStreetCom] = useState(osmFaUrl);
  return (
    <div>
      <ChooseExpFa
        textURL={"/assets/OSCtextFa.svg"}
        setTourismUrl={setOpenStreetCom}
        iframeURL={openStreetCom}
        languageEng={"english"}
        languageFra={"francais"}
      />
    </div>
  );
};

export default OscIframe;
