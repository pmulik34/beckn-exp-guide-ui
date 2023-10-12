import React, { useState } from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";

const DHPIframe = () => {
  const dsepUnified = process.env.REACT_APP_DSEP_UNIFIED_APP_URL;

  return (
    <div style={{ position: "relative" }}>
      <ChooseExperience
        textURL={"/assets/DHP_text.svg"}
        iframeURL={dsepUnified}
      />
    </div>
  );
};

export default DHPIframe;
