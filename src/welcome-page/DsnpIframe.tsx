import React, { useState,useRef } from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";

const DsnpIframe = () => {
  const DsnpUrl = process.env.REACT_APP_DSNP_APP_URL_FEED;
  const retailStoreUrl = process.env.REACT_APP_RETAIL_APP_URL;
  const [dsnpUrl, setDsnpUrl] = useState(retailStoreUrl);
  const [activeButton, setActiveButton] = useState("for_tetail_store");
  const iframeRef = useRef(HTMLIFrameElement);


  const handleRetailStore = (e: any) => {
    setDsnpUrl(retailStoreUrl);
    setActiveButton("for_tetail_store");
  };
  const handleDsnp = (e: any) => {
    setDsnpUrl(DsnpUrl);
    setActiveButton("for_cutm_name");
  };





  return (
    <div style={{ position: "relative" }}>
      <ChooseExperience
        textURL={"/assets/DSNP_text.svg"}
        setTourismUrl={setDsnpUrl}
        iframeURL={dsnpUrl}
        iframeRef={iframeRef}
      />
      <div className="osc_tab_change dsnp_url_tab">
        <div
          className={`for_tetail_store dsnp_retail_store ${
            activeButton === "for_tetail_store" ? "active_dsnp" : ""
          }`}
          onClick={handleRetailStore}
        >
          {activeButton === "for_tetail_store" ? (
            <img src="/assets/retail_store_icon_white.svg" />
          ) : (
            <img src="/assets/retail_store_icon.svg" />
          )}
          retail store
        </div>
        <div
          className={`for_cutm_name for_dsnp_app ${
            activeButton === "for_cutm_name" ? "active_dsnp" : ""
          }`}
          onClick={handleDsnp}
        >
          {activeButton === "for_cutm_name" ? (
            <img src="/assets/custm_app_icon_white.svg" />
          ) : (
            <img src="/assets/custm_app_icon.svg" />
          )}
          DSNP app
        </div>
        

      </div>
    </div>
  );
};

export default DsnpIframe;
