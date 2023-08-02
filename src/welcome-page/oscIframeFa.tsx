import React, { useState } from "react";
import ChooseExpFa from "../common/Tabs/chooseExpFa";

const OscIframe = () => {
  const osmFaUrl = process.env.REACT_APP_OSM_FAR_URL;
  const retailStoreUrl = process.env.REACT_APP_RETAIL_STORE_URL;
  const [openStreetCom, setOpenStreetCom] = useState(osmFaUrl);
  const [activeButton, setActiveButton] = useState("for_cutm_name");
  const [retailsModal, setRetailsModal] = useState(false);

  const handleOsmLink = (e: any) => {
    setOpenStreetCom(osmFaUrl);
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
      <ChooseExpFa
        textURL={"/assets/OSCtextFa.svg"}
        setTourismUrl={setOpenStreetCom}
        iframeURL={openStreetCom}
        languageEng={"english"}
        languageFra={"français"}
        retailsModal={retailsModal}
      />
      <div className="osc_tab_change osc_tab_changeFa">
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
          application client
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
          pour les détaillants store
        </div>
      </div>
    </div>
  );
};

export default OscIframe;
