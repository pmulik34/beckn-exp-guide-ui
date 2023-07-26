import React, { useState } from "react";
import ChooseExperience from "../common/Tabs/chooseExperience";

const OscIframe = () => {
  const osmEngUrl = process.env.REACT_APP_OSM_ENG_URL;
  const retailStoreUrl = process.env.REACT_APP_RETAIL_STORE_URL;
  const [openStreetCom, setOpenStreetCom] = useState(osmEngUrl);
  const [activeButton, setActiveButton] = useState("for_cutm_name");
  const [retailsModal, setRetailsModal] = useState(false);

  const handleOsmLink = (e: any) => {
    setOpenStreetCom(osmEngUrl);
    setActiveButton("for_cutm_name");
    setRetailsModal(false);
  };
  const handleRetailStore = (e: any) => {
    setOpenStreetCom(retailStoreUrl);
    setActiveButton("for_tetail_store");
    setRetailsModal(true);
  };
  return (
    <div style={{ position: "relative" }}>
      <ChooseExperience
        textURL={"/assets/OSCtext.svg"}
        setTourismUrl={setOpenStreetCom}
        iframeURL={openStreetCom}
        languageEng={"english"}
        languageFra={"francais"}
        retailsModal={retailsModal}
      />
      <div className="osc_tab_change">
        <div
          className={`for_cutm_name ${
            activeButton === "for_cutm_name" ? "active" : ""
          }`}
          onClick={handleOsmLink}
        >
          {activeButton === "for_cutm_name" ? (
            <img src="/assets/custm_app_icon_white.svg" />
          ) : (
            <img src="/assets/custm_app_icon.svg" />
          )}
          customer app
        </div>
        <div
          className={`for_tetail_store ${
            activeButton === "for_tetail_store" ? "active" : ""
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
      </div>
    </div>
  );
};

export default OscIframe;
