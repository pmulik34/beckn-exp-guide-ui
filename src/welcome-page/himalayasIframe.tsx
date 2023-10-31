import React from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";
const HimalayasIframe = () => {
  const himalayasURl = process.env.REACT_APP_TOURISM_URL;
  return (
    <div>
      <ChooseExperience
        headingText="a tryst with the"
        textURL={"/assets/himalyasText.svg"}
        descriptionText="see for yourself how simple vacationing can be."
        iframeURL={himalayasURl}
      />
    </div>
  );
};

export default HimalayasIframe;
