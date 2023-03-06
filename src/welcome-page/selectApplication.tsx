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
          <div>
            <Link
              to="/Select-application"
              style={{ textDecoration: "none", color: "#000", width: "100%" }}
            >
              <Card
                mainIconUrlInBlack="/assets/turisumApplicationHover.svg"
                className="hover_card"
                mainIconUrl="/assets/turisumApplication.svg"
                MainTitle={"Policy Admin"}
              />
            </Link>
          </div>
          <div>
            <Link
              to="/select-admin"
              style={{ textDecoration: "none", color: "#000", width: "100%" }}
            >
              <Card
                mainIconUrlInBlack="/assets/retailApplicationHover.svg"
                className="hover_card"
                mainIconUrl="/assets/retailApplication.svg"
                MainTitle={"Policy Admin"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectApplication;
