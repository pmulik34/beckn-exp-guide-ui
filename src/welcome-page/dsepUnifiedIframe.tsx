import React, { useState } from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";

const DsepUnifiedIframe = () => {
  const dsepUnified = process.env.REACT_APP_DSEP_UNIFIED_APP_URL;

  return (
    <div style={{ position: "relative" }}>
      <ChooseExperience
        textURL={"/assets/dsep_unified_text.svg"}
        iframeURL={dsepUnified}
      />
    </div>
  );
};

export default DsepUnifiedIframe;
