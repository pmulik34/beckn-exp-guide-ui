import { useNavigate } from "react-router-dom";
import "../selectExperience.css";
import "./regenAg.css";

const CardList = [
  {
    key: "ONDC",
    cardImg: "/assets/ONDC_card.svg",
    cardText: "Open Network for Digital Commerce",
  },
  {
    key: "regenUEI",
    cardImg: "/assets/UEI_cardImgAR.svg",
    cardText: "Unified Energy Interface",
  },
  {
    key: "regenerativeAgriculture",
    cardImg: "/assets/regenAg_card.svg",
    cardText: "Regenerative Agriculture",
  },
];

const RegenAg = () => {
  const navigate = useNavigate();
  const handleNevigate = (id: any) => {
    localStorage.setItem("name", id);
    const name = localStorage.getItem("name");
    switch (name) {
      case "ONDC":
        navigate("/ONDC");
        break;
      case "regenerativeAgriculture":
        navigate("/regenerativeAgriculture");
        break;
      case "regenUEI":
        navigate("/regenUEI");
        break;
    }
  };
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="headLogo-image">
        <img className="Beckn-image" src="/assets/beckn_lg.svg" alt={"Logo"} />
        {/* <button
          onClick={() => navigate("/")}
          style={{ width: "55px", marginTop: "-10px" }}
          className="home-buttom-nevigate"
        >
          <span>
            <img
              style={{ width: "24px", position: "relative" }}
              src="/assets/home.svg"
              alt=""
            />
          </span>
        </button> */}
      </div>
      <div className="welcome-Screen-container">
        <div className="child-container">
          <div className="animates fadeIns fives home-card-container">
            <ul className="card-sub-containers">
              {CardList.map((card, ind) => {
                return (
                  <>
                    <li onClick={() => handleNevigate(card.key)} key={card.key}>
                      <div className="card-with-image">
                        <img
                          className="first-image-card"
                          src={card.cardImg}
                          alt={"BecknLogoIcon"}
                        />
                        <p className="card-title-image">
                          <span className="font-color">{card.cardText}</span>
                        </p>
                      </div>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegenAg;
