import React, { useState } from "react";
import ChooseExpFa from "../common/Tabs/chooseExpFa";

const OscIframe = () => {
  const [openStreetCom, setOpenStreetCom] = useState(
    "https://osm-dev.becknprotocol.io/fa"
  );
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
