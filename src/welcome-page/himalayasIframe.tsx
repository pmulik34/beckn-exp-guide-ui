import React from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";
const HimalayasIframe = () => {
  return (
    <div>
      <ChooseExperience
        textURL={"/assets/himalyasText.svg"}
        iframeURL={"https://tourism-app.becknprotocol.io/"}
        // iframeURL={"https://www.wikipedia.org/"}
      />
    </div>
  );
};

export default HimalayasIframe;
