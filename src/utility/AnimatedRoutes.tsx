import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import VideoTemplate from "../components/videoTemplate/videoTemplate";
import Wallet from "../welcome-page/Wallet";
import SelectionPage from "../components/SelectionPages/selectionPages";
import LandingPage from "../components/landingPage/LandingPage";
import SelectExperience from "../selectExperience/SelectExperience";
// import ProgressBar from "../components/progressBar/ProgressBar";
import ChooseExperienceOsc from "../components/chooseExperience/ChooseExperienceOsc";
import ChooseExperiencePCM from "../components/chooseExperience/ChooseExperiencePCM";
import ChooseExperienceDsep from "../components/chooseExperience/ChooseExperienceDsep";
import ChooseExperienceHimalyas from "../components/chooseExperience/ChooseExperienceHimalyas";
import ChooseExperienceSmartCities from "../components/chooseExperience/ChooseExperienceSmartCities";
import ChooseExperienceGambia from "../components/chooseExperience/ChooseExperienceGambia";
import ChooseExperienceCityOfLight from "../components/chooseExperience/ChooseExperienceCityOfLight";
import ThankYouPage from "../components/thankYouPage/ThankYouPage";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/himalayas" element={<ChooseExperienceHimalyas />} />
        <Route path="/cities" element={<ChooseExperienceSmartCities />} />
        <Route path="/cityOfLight" element={<ChooseExperienceCityOfLight />} />
        <Route path="/gambia" element={<ChooseExperienceGambia />} />
        <Route path="/OSC" element={<ChooseExperienceOsc />} />
        <Route path="/DSEP" element={<ChooseExperienceDsep />} />
        <Route path="/PCM" element={<ChooseExperiencePCM />} />
        <Route path="/select-experience" element={<SelectExperience />} />
        {/* <Route path="/progress" element={<ProgressBar />} /> */}
        <Route path="/ThankYou" element={<ThankYouPage />} />
        <Route path="/videoTemplate" element={<VideoTemplate />} />
        <Route path="/selectionPage" element={<SelectionPage />} />
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
