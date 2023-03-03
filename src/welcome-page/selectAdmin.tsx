import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Card from "../common/Cards/card";

const SelectAdmin = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <div className="main-container page-content">
      <div className="header">
        <div>
          <img
            style={{
              height: "52px",
              width: "200px",
              marginTop: "20px",
              cursor: "pointer",
            }}
            src="/assets/BecknLogo.svg"
            alt={"BecknLogoIcon"}
          />
        </div>
        <Link
          style={{
            cursor: "pointer",
            background: "black",
            width: "40px",
            height: "40px",
            borderRadius: "26px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            right: "100px",
          }}
          to={"/"}
        >
          <img src="/assets/homeIcon.svg" alt={"HomeIcon"} />
        </Link>
      </div>
      <div className="content-wrapper">
        <motion.div
          initial={{ x: state ? "-100vw" : "100vw" }}
          animate={{ x: 0, y: 0 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          exit={{
            x: state ? "100vw" : "-100vw",
            transition: { ease: "easeOut", duration: 0 },
          }}
        >
          <div style={{ display: "flex", justifyContent:"center", marginTop:"15%" }}>
            <Card
              mainIconUrlInBlack="/assets/noteIconInBlack.svg"
              className="hover_card"
              mainIconUrl="/assets/noteIcon.svg"
              MainTitle={"Policy Admin"}
            />
            <Card
              mainIconUrlInBlack="/assets/noteIconInBlack.svg"
              className="hover_card"
              mainIconUrl="/assets/noteIcon.svg"
              MainTitle={"Travel buddy Admin"}
            />
            <Card
              mainIconUrlInBlack="/assets/travelBuddyIconInBlack.svg"
              className="hover_card"
              mainIconUrl="/assets/travelBuddyIcon.svg"
              MainTitle={"Travel buddy"}
            />
          </div>
        </motion.div>
      </div>
      <div
        className="back-btn"
        onClick={() => navigate("/", { state: "flag" })}
      >
        <img src="/assets/backArrw.svg" alt="" /> Go Back
      </div>
    </div>
  );
};

export default SelectAdmin;
