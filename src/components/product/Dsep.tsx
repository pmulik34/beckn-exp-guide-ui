import React, { useState } from "react";
import IframeComp from "../iframe/IframeComp";
import DsepInstructionModal from "../instructionModal/DsepInstructionModal";

const Dsep = () => {
  const DSEPUrl = process.env.REACT_APP_DSEP_URL;

  return (
    <div>
      <IframeComp
        heading1={"empowering limitless"}
        heading2={"/assets/dseptext1.svg"}
        heading3={" "}
        description_text={
          "Discover and consume endless online learning possibilities in one convenient hub, enhancing your skills and knowledge across diverse disciplines"
        }
        IframeURL={DSEPUrl}
        scrolling={"no"}
        instructionModal={<DsepInstructionModal />}
      />
    </div>
  );
};

export default Dsep;
