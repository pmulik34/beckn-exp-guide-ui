import React, { useState } from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";

const DsepUnifiedIframe = () => {
  const dsepUnified = process.env.REACT_APP_DSEP_UNIFIED_APP_URL;

  return (
    <div style={{ position: "relative" }}>
      <ChooseExperience
        headingText="grow your career with"
        textURL={"/assets/dsep_unified_text.svg"}
        descriptionText="Explore a wide array of online educational resources, scholarships, and job prospects all within a single, user-friendly platform. This hub will enrich your expertise and knowledge across various fields."
        iframeURL={dsepUnified}
      />
    </div>
  );
};

export default DsepUnifiedIframe;
