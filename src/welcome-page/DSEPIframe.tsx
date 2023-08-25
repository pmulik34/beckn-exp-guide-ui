import React from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";

const DSEPIframe = () => {
  const DSEPUrl = process.env.REACT_APP_DSEP_URL;
  return (
    <div>
      <ChooseExperience textURL={"/assets/DSEPText.svg"} iframeURL={DSEPUrl} />
    </div>
  );
};

export default DSEPIframe;
