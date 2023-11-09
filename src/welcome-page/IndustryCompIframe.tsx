import React, { useState } from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";

const IndustryCompIframe = () => {
  const industryUrl = process.env.REACT_APP_INDUSTRY_APP_URL;

  return (
    <div>
      <ChooseExperience
        headingText="revolutionizing with"
        textURL={"/assets/industry-text.svg"}
        descriptionText="revolutionising global manufacturing by seamlessly integrating multiple factories and manufacturing units through beckn protocol"
        iframeURL={industryUrl}
      />
    </div>
  );
};

export default IndustryCompIframe;
