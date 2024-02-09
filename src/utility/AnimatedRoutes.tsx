import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SelectExperience from "../welcome-page/selectExperience";
// import SelectAdmin from "../welcome-page/himalayas";
import { AnimatePresence } from "framer-motion";
import WelcomeScreen from "../welcome-page/WelcomeScreen";
// import SelectApplication from "../welcome-page/cities";
import TabsComponent from "../common/Tabs/tabs";
import ProgressBar from "../welcome-page/progressBar";
import ModalComponent from "../welcome-page/modal";
import ThankYou from "../welcome-page/thankYou";
import VideoTemplate from "../common/videoTemplate/videoTemplate";
import Himalayas from "../welcome-page/Himalaya/himalayas";
import Cities from "../welcome-page/Cities/cities";
import CityOfLight from "../welcome-page/CityOfLight/cityOfLight";
import Wallet from "../welcome-page/Wallet";
import SelectionPage from "../common/MobileBAP/SelectionPages/selectionPages";
import CityOfAfrica from "../welcome-page/CityOfAfrica/CityOfAfrica";
import Osc from "../welcome-page/Osc/osc";
import Pcm from "../welcome-page/Pcm/Pcm";
import PcmFa from "../welcome-page/PcmFa/PcmFa";
import OscFa from "../welcome-page/OscFa/OscFa";
import DSEP from "../welcome-page/DSEP/DSEP";
import CityOfLightFa from "../welcome-page/CityOfLightFa/cityOfLightFa";
import UEI from "../welcome-page/UEI/UEI";
import DsepUnified from "../welcome-page/DsepUnified/DsepUnified";
import Dsnp from "../welcome-page/DSNP/Dsnp";
import DHP from "../welcome-page/DHP/DHP";
import IndustryComp from "../welcome-page/Industry4.0/IndustryComp";
import ODR from "../welcome-page/ODR/ODR";
import RegenAg from "../welcome-page/RegenAg/regenAg";
import ONDC from "../welcome-page/ONDC/ONDC";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/regenAg" element={<RegenAg />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/himalayas" element={<Himalayas />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/cityOfLight" element={<CityOfLight />} />
        <Route path="/cityOfAfrica" element={<CityOfAfrica />} />
        <Route path="/OSC" element={<Osc />} />
        <Route path="/DSEP" element={<DSEP />} />
        <Route path="/PCM" element={<Pcm />} />
        <Route path="/PCM-Fa" element={<PcmFa />} />
        <Route path="/OSC-Fa" element={<OscFa />} />
        <Route path="/DHP" element={<DHP />} />
        <Route path="/industry4.0" element={<IndustryComp />} />
        <Route path="/UEI" element={<UEI />} />
        <Route path="/ODR" element={<ODR />} />
        <Route path="/DSNP" element={<Dsnp />} />
        <Route path="/CityOfLightFa" element={<CityOfLightFa />} />
        <Route path="/dsep-unified" element={<DsepUnified />} />
        <Route path="/select-experience" element={<SelectExperience />} />
        <Route path="/tabs" element={<TabsComponent />} />
        <Route path="/progress" element={<ProgressBar />} />
        <Route path="/ThankYou" element={<ThankYou />} />
        <Route path="/videoTemplate" element={<VideoTemplate />} />
        <Route path="/selectionPage" element={<SelectionPage />} />
        <Route path="/ONDC" element={<ONDC />} />
        <Route
          path="*"
          element={
            <h1
              style={{
                color: "#fff",
              }}
              className="main-container"
            >
              Error 404 : Page Not Found
            </h1>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
