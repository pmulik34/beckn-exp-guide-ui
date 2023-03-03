import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SelectExperience from "../welcome-page/selectExperience";
import SelectAdmin from "../welcome-page/selectAdmin";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SelectExperience/>} />
        <Route path="/select-admin" element={<SelectAdmin />} />
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
