import React from "react";
import IframeComp from "../iframe/IframeComp";

const Himalyas = () => {
  const himalayasURl = process.env.REACT_APP_TOURISM_URL;
  return (
    <div>
      <IframeComp
        heading1={"a tryst with the"}
        heading2={"/assets/himalyasIcon.svg"}
        heading3={" "}
        description_text={"see for yourself how simple vacationing can be."}
        IframeURL={himalayasURl}
        scrolling={"no"}
      />
    </div>
  );
};

export default Himalyas;
