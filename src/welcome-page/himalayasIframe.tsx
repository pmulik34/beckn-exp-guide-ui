import React from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";
const HimalayasIframe = () => {
  return (
    <div>
      <ChooseExperience
        textURL={"/assets/himalyasText.svg"}
        iframeURL={process.env.REACT_APP_HIMALAYAN_URL}
      />
    </div>
  );
};

export default HimalayasIframe;
