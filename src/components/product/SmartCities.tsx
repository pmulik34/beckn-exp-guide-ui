import React from "react";
import IframeComp from "../iframe/IframeComp";

const SmartCities = () => {
  const smartCitiesUrl = process.env.REACT_APP_SMART_CITIES_URL;
  return (
    <div>
      <IframeComp
        heading1={"enabling"}
        heading2={"/assets/smartCityIcon.svg"}
        heading3={" "}
        description_text={
          "see for yourself how dynamic information enable smart cities."
        }
        IframeURL={smartCitiesUrl}
        scrolling={"no"}
      />
    </div>
  );
};

export default SmartCities;
