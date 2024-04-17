import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../welcome-page/selectExperience.css";
import { useEffect } from "react";
import { Typography } from "antd";

const ClimateResilience: React.FC = () => {
  // <-- Corrected component declaration
  const navigate = useNavigate();

  const handleNevigate = (id: any) => {
    localStorage.setItem("name", id);
    navigate("/progress");
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
        </Link>{" "}
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
            Figma ipsum component variant <br /> main layer. Scale arro.
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
            Figma ipsum component variant main layer. Vertical export layer
            blur.{" "}
          </Typography.Paragraph>
        </div>
        <img src="/assets/jica.png" alt="Logo" />
      </div>

      <div className="welcome-Screen-container">
        <div className="child-container">
          <div className="animates fadeIns fives home-card-container">
            <ul className="card-sub-containers">
              <li onClick={() => handleNevigate("FOREST1")}>
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
              <li onClick={() => handleNevigate("FOREST2")}>
                <div className="card-with-image">
                  <img
                    className="first-image-card"
                    src="/assets/forestrestoration.svg"
                    alt={"BecknLogoIcon"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">
                      forest restoration project to ensure ecological health and
                      sustainability
                    </span>
                  </p>
                </div>
              </li>
              <li onClick={() => handleNevigate("FOREST3")}>
                <div className="card-with-image">
                  <img
                    className="first-image-card"
                    src="/assets/leadingfoodandbeveragecompany.svg"
                    alt={"BecknLogoIcon"}
                  />
                  <p className="card-title-image">
                    <span className="font-color">
                      a leading food and beverage company with an ambitious
                      sustainability agenda
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
