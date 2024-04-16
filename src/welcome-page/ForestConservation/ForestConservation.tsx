import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../welcome-page/selectExperience.css";
import { useEffect } from "react";
import { Typography } from "antd";

const ClimateResilience: React.FC = () => {
  // <-- Corrected component declaration
  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    // <-- Specified type for 'id'
    localStorage.setItem("name", id);
    switch (id) {
      case "climate1":
        navigate("/climate1");
        break;
      case "climate2":
        navigate("/climate2");
        break;
      case "climate3":
        navigate("/climate3");
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
        <img className="Beckn-image" src="/assets/beckn_lg.svg" alt={"Logo"} />
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
            Climate Resilience Data Highways for <br />
            Disaster Resilience
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
            A decentralized network for secure access to reliable data
          </Typography.Paragraph>
        </div>
        <button
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
        </button>
      </div>

      <div className="welcome-Screen-container">
        <div className="child-container">
          <div className="animates fadeIns fives home-card-container">
            <ul className="card-sub-containers">
              <li onClick={() => handleNavigate("climate1")}>
                <div className="card-with-image">
                  <img
                    className="first-image-card"
                    src="/assets/forest_degradation.svg"
                    alt={"BecknLogoIcon"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">
                      detect and measure forest degradation & facilitate
                      intervention
                    </span>
                  </p>
                </div>
              </li>
              <li onClick={() => handleNavigate("climate2")}>
                <div className="card-with-image">
                  <img
                    className="first-image-card"
                    src="/assets/forestrestoration.svg"
                    alt={"BecknLogoIcon"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">
                    forest restoration project to ensure ecological health and sustainability
                    </span>
                  </p>
                </div>
              </li>
              <li onClick={() => handleNavigate("climate3")}>
                <div className="card-with-image">
                  <img
                    className="first-image-card"
                    src="/assets/leadingfoodandbeveragecompany.svg"
                    alt={"BecknLogoIcon"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">
                    a leading food and beverage company with an ambitious sustainability agenda
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

export default ClimateResilience;
