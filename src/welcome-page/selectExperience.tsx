import { Link, useNavigate, useLocation } from "react-router-dom";
import Title from "../common/title";
import CardWithContent from "../common/Cards/cardWithContent";
import { motion } from "framer-motion";

const VisualizeAction = () => {
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
      </div>
      <div className="content-wrapper">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ animationDelay: "2s", ease: "easeOut" }}
        >
          <div className="content-wrapper-innr">
            <motion.div
              transition={{ ease: "easeIn", duration: 0.2 }}
              exit={{
                transition: { duration: "none" },
              }}
            >
              <Title
                titleText={"welcome to the beckn experience center"}
                className="page-content-title"
              />
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: state ? "-100vw" : "100vw" }}
          animate={{ x: 0, y: 0 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          exit={{
            x: state ? "100vw" : "-100vw",
            transition: { ease: "easeOut", duration: 0 },
          }}
        >
          <div className="card-wrapper">
            <Link
              to="/"
              style={{ textDecoration: "none", color: "#000", width: "100%" }}
            >
              <CardWithContent
                mainIconUrlInBlack="/assets/cloudStorageIconInBlack.svg"
                arrowIconInBlackColor="/assets/tiltArrowblack.svg"
                className="hover_card"
                mainIconUrl="/assets/cloudStorageIcon.svg"
                arrowIconUrl="/assets/tiltArrow.svg"
                MainTitle={"Experience 1"}
                subTitle={"A Tryst with Himalayas"}
              />
            </Link>
            <Link
              to="/select-admin"
              style={{ textDecoration: "none", color: "#000", width: "100%" }}
            >
              <CardWithContent
                mainIconUrlInBlack="/assets/noteIconInBlack.svg"
                arrowIconInBlackColor="/assets/tiltArrowblack.svg"
                className="hover_card"
                mainIconUrl="/assets/noteIcon.svg"
                arrowIconUrl="/assets/tiltArrow.svg"
                MainTitle={"Experience 2"}
                subTitle={"Smart cities enabled through Smart Policies"}
              />
            </Link>
          </div>
        </motion.div>
        <div className="back-btn" onClick={() => navigate("/")}>
          <img src="/assets/backArrw.svg" alt="" /> Go Back
        </div>
      </div>
    </div>
  );
};

export default VisualizeAction;
