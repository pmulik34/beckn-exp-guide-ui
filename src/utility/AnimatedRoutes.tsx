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

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/himalayas" element={<Himalayas />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/cityOfLight" element={<CityOfLight />} />
        <Route path="/select-experience" element={<SelectExperience />} />
        <Route path="/tabs" element={<TabsComponent />} />
        <Route path="/progress" element={<ProgressBar />} />
        <Route path="/ThankYou" element={<ThankYou />} />
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
