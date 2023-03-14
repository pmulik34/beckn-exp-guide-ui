import { Link } from "react-router-dom";
import Title from "../common/title";
import Card from "../common/Cards/card";
import { useNavigate } from "react-router-dom";
import "./selectExperience.css";


const SelectExperience = () => {
  const navigate = useNavigate();
  const handleNevigate = (id: any) => {
    localStorage.setItem("name", id);
    navigate("/progress");
  };
  return (
    <div className="main-container page-content">
      <div style={{width:"100%"}} className="header">
        <div style={{width:"50%", textAlign:"end"}}>
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
        <div style={{width:"40%", textAlign:"end"}}>
          <button onClick={()=>navigate('/')}
            style={{ width: "130px" }}
            className="border-gradient border-gradient-purple"
          >
            <span style={{ paddingRight: "5px" }}>
              <img
                style={{ width: "24px", position: "relative", top: "5px" }}
                src="/assets/home.svg"
                alt=""
              />
            </span>
            <span style={{ paddingLeft: "5px", color: "#343538" }}>home</span>
          </button>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="content-wrapper-innr">
          <Title
            titleText={"select your experience"}
            className="page-content-title"
          />
        </div>
        <div className="card-containers">
          <ul className="card-sub-containers">
            <li onClick={() => handleNevigate("himalayas")}>
              <div className="card-with-image">
                <img
                  className="first-image-card"
                  src="/assets/XXX.png"
                  alt={"BecknLogoIcon"}
                />
                <p className="card-title-image">A Tryst with the Himalayas</p>
              </div>
            </li>
            <li onClick={() => handleNevigate("cities")}>
              <div className="card-with-image">
                <img
                  className="second-image-card"
                  src="/assets/YYY.png"
                  alt={"BecknLogoIcon"}
                />
                <p className="card-title-image">Enabling Smart Cities</p>
              </div>
            </li>
          </ul>
        </div>    
      </div>
    </div>
  );
};

export default SelectExperience;
