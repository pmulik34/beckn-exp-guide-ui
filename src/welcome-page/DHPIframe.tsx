import React, { useState } from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";

const DHPIframe = () => {
  const dsepUnified = process.env.REACT_APP_DSEP_UNIFIED_APP_URL;

  return (
    <div style={{ position: "relative" }}>
      <ChooseExperience
        headingText="Healthcare Hub:"
        textURL={"/assets/DHP_text.svg"}
        descriptionText="an integrated solution that encompasses consulting with doctors, scheduling appointments, procuring medications, and locating nearby diagnostic laboratories for tests."
        iframeURL={dsepUnified}
      />
    </div>
  );
};

export default DHPIframe;
