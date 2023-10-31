import React from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";

const DSEPIframe = () => {
  const DSEPUrl = process.env.REACT_APP_DSEP_URL;
  return (
    <div>
      <ChooseExperience
        headingText="empowering limitless"
        textURL={"/assets/DSEPText.svg"}
        descriptionText="Discover and consume endless online learning possibilities in one convenient hub, enhancing your skills and knowledge across diverse disciplines"
        iframeURL={DSEPUrl}
      />
    </div>
  );
};

export default DSEPIframe;
