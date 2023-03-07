import { Link } from "react-router-dom";
import Card from "../common/Cards/card";

const SelectApplication = () => {
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
        <div style={{display:"flex", justifyContent:"center", marginTop:"100px"}}>
          <div className="card-head">
              <Card
                mainIconUrlInBlack="/assets/turisumApplicationHover.svg"
                className="hover_card"
                mainIconUrl="/assets/turisumApplication.svg"
                MainTitle={"Policy Admin"}
              />
          </div>
          <div className="card-head">
              <Card
                mainIconUrlInBlack="/assets/retailApplicationHover.svg"
                className="hover_card"
                mainIconUrl="/assets/retailApplication.svg"
                MainTitle={"Policy Admin"}
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectApplication;
