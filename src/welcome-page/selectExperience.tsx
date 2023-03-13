import { Link } from "react-router-dom";
import Title from "../common/title";
import Card from "../common/Cards/card";
import { useNavigate } from "react-router-dom";

const SelectExperience = () => {
  const navigate = useNavigate();
  const handleNevigate = (id: any)=>{
    localStorage.setItem("name", id)
    navigate('/progress')
  }
  return (
    <div className="main-container page-content">
      <div className="header">
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
      <div className="content-wrapper">
        <div className="content-wrapper-innr">
          <Title
            titleText={"select your experience"}
            className="page-content-title"
          />
        </div>
        <div style={{display:"flex", justifyContent:"center"}}>
          <div className="card-head" onClick={()=>handleNevigate("himalayas")}>
            {/* <Link
              to="/progress"
              style={{ textDecoration: "none", color: "#000", width: "100%" }}
            > */}
              <Card 
                mainIconUrlInBlack="/assets/himalayasCardHover.svg"
                className="hover_card"
                mainIconUrl="/assets/himalayasCard.svg"
                MainTitle={"Policy Admin"}
              />
            {/* </Link> */}
          </div>
          <div className="card-head" onClick={()=>handleNevigate("cities")}>
            {/* <Link
              to="/progress"
              style={{ textDecoration: "none", color: "#000", width: "100%" }}
            > */}
              <Card 
                mainIconUrlInBlack="/assets/citiesCardHover.svg"
                className="hover_card"
                mainIconUrl="/assets/citiesCard.svg"
                MainTitle={"Policy Admin"}
              />
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectExperience;
