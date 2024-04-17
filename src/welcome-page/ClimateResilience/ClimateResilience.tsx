import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Typography } from "antd";
import { Link } from "react-router-dom";

const ClimateResilience: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
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
        <Link to="/select-experience">
          <img
            className="Beckn-image"
            src="/assets/beckn_lg.svg"
            alt={"Logo"}
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
        <img src="/assets/jica.png" alt="Logo" />
      </div>

      <div className="welcome-Screen-container">
        <div className="child-container">
          <div className="animates fadeIns fives home-card-container">
            <ul className="card-sub-containers">
              <li onClick={() => handleNavigate("climate1")}>
                <div className="card-with-image">
                  <img
                    className="first-image-card"
                    src="/assets/FMCG.svg"
                    alt={"BecknLogoIcon"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">
                      An FMCG company delivers flood-resilient farming advisory
                      to its contract farmers{" "}
                    </span>
                  </p>
                </div>
              </li>
              <li onClick={() => handleNavigate("climate2")}>
                <div className="card-with-image">
                  <img
                    className="first-image-card"
                    src="/assets/Climate_Resilience.svg"
                    alt={"BecknLogoIcon"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">
                      A climate services startup delivers flood predictions for
                      early warnings
                    </span>
                  </p>
                </div>
              </li>
              <li onClick={() => handleNavigate("climate3")}>
                <div className="card-with-image">
                  <img
                    className="first-image-card"
                    src="/assets/humanitarian_aid.svg"
                    alt={"BecknLogoIcon"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">
                      A humanitarian aid organization plans for anticipatory aid{" "}
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
