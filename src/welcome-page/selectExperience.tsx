import { Link } from "react-router-dom";
import Title from "../common/title";
import Card from "../common/Cards/card";
import { useNavigate } from "react-router-dom";
import "./selectExperience.css";
import { useEffect } from "react";
import { Typography } from "antd";

const SelectExperience = () => {
  const navigate = useNavigate();

  const handleNavigate = (id: any) => {
    localStorage.setItem("name", id);
    switch (id) {
      case "ClimateResilience":
        navigate("/climateresilience");
        break;
      case "ForestConservation":
        navigate("/forestconservation");
        break;
      default:
        navigate("/");
        break;
    }
  };

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <div className="headLogo-image">
        <Link to="/select-experience">
          <img
            className="Beckn-image"
            src="/assets/beckn_lg.svg"
            alt={"Logo"}
            height={'40px'}
          />
        </Link>
        <div className="heading-container">
          <Typography.Title
            level={3}
            style={{
              margin: 0,
              textAlign: "center",
              color: "rgba(78, 119, 150, 1)",
              fontSize: "32px",
              fontWeight: "600",
            }}
          >
            Climate Resilience Data Highways Themes
          </Typography.Title>
          <Typography.Paragraph
            style={{
              margin: "10px 0",
              textAlign: "center",
              color: "rgba(123, 123, 123, 1)",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            {/* A decentralized network for secure access to reliable data */}
          </Typography.Paragraph>
        </div>
        {/* <button
          onClick={() => navigate("/")}
          style={{ width: "55px", marginTop: "-10px", background: "none" }}
          className="home-button-navigate"
        >
          <span>
            <img
              style={{ width: "24px", position: "relative" }}
              src="/assets/home.svg"
              alt=""
            />
          </span>
        </button> */}
        <img src="/assets/jica.png" alt="Logo" />
      </div>

      <div className="welcome-Screen-container">
        <div className="child-container">
          <div className="animates fadeIns fives home-card-container">
            <ul className="card-sub-containers">
              <li onClick={() => handleNavigate("ClimateResilience")}>
                <div className="card-with-image">
                  <img
                    className="first-image-card"
                    src="/assets/climate_resilience.svg"
                    alt={"BecknLogoIcon"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">
                      Enhancing resilience to climate-induced disasters
                    </span>
                  </p>
                </div>
              </li>
              <li onClick={() => handleNavigate("ForestConservation")}>
                <div className="card-with-image">
                  <img
                    className="first-image-card"
                    src="/assets/forest_conservation.svg"
                    alt={"BecknLogoIcon"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">
                      Tackling climate change through forest conservation
                    </span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectExperience;
