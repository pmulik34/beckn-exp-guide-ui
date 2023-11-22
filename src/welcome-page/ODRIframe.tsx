import React, { useState } from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";

const ODRIframe = () => {
  const ODRUrl = process.env.REACT_APP_ODR_APP_URL;

  return (
    <div>
      <ChooseExperience
        headingText="resolving disputes online with"
        textURL={"/assets/ODRLogo.svg"}
        descriptionText="discover lawyers, online dispute resolution (ODR) service providers, paralegals and other legal services and information in a quick and seamless manner"
        iframeURL={ODRUrl}
      />
    </div>
  );
};

export default ODRIframe;
