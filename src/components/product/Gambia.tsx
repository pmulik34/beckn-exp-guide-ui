import React from "react";
import IframeComp from "../iframe/IframeComp";

const Gambia = () => {
  const cityofAfricaUrl = process.env.REACT_APP_CITY_OF_AFRICA_URL;
  return (
    <div>
      <IframeComp
        heading1={"enabling"}
        heading2={"/assets/GambiaIcon.svg"}
        heading3={" "}
        description_text={
          "discover for yourself how easy it is to  travel around Gambia."
        }
        IframeURL={cityofAfricaUrl}
        scrolling={"no"}
      />
    </div>
  );
};

export default Gambia;
