import React, { useState } from "react";
import IframeComp from "../iframe/IframeComp";
import OscInstructionModal from "../instructionModal/OscInstructionModal";
import OscRetailsInstructionModal from "../instructionModal/OscRetailsInstructionModal";

const Osc = () => {
  const osmEngUrl = process.env.REACT_APP_OSM_ENG_URL;
  const osmFaUrl = process.env.REACT_APP_OSM_FAR_URL;
  const retailStoreUrl = process.env.REACT_APP_RETAIL_STORE_URL;
  const [openStreetCom, setOpenStreetCom] = useState(osmEngUrl);
  const [activeButton, setActiveButton] = useState("for_cutm_name");
  const [retailsModal, setRetailsModal] = useState(false);

  const [language, setLanguage] = useState(osmEngUrl);

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

  const handleLanguageEn = () => {
    setLanguage(osmEngUrl);
  };
  const handleLanguageFa = () => {
    setLanguage(osmFaUrl);
  };
  return (
    <div>
      <IframeComp
        heading1={
          language === osmEngUrl
            ? "enabling commerce on"
            : "permettre le commerce sur"
        }
        heading2={"/assets/openStreetMap.svg"}
        heading3={" "}
        description_text={
          language === osmEngUrl
            ? "explore the delicacies around you. find what you like and get it delivered at your convenience. "
            : "explorez les délices qui vous entourent. Trouvez ce que vous aimez et faites-vous livrer à votre convenance."
        }
        IframeURL={openStreetCom}
        scrolling={"no"}
        english={"english"}
        france={"français"}
        handleLanguageEn={handleLanguageEn}
        activeEn={language === osmEngUrl ? "active" : ""}
        handleLanguageFa={handleLanguageFa}
        activeFa={language === osmFaUrl ? "active" : ""}
        instructionModal={
          openStreetCom === retailStoreUrl ? (
            <OscRetailsInstructionModal />
          ) : (
            <OscInstructionModal />
          )
        }
      />
      <div
        className={
          language === osmFaUrl
            ? "osc_tab_change osc_tab_changeFa"
            : "osc_tab_change"
        }
      >
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

export default Osc;
