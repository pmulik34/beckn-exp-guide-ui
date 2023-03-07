import { Link } from "react-router-dom";
import Card from "../common/Cards/card";

const SelectAdmin = () => {
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
        <div className="admin-container"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "100px",
          }}
        >
          <div>
            <Link
              to="https://policy-admin.becknprotocol.io/"
              target="_blank"
              style={{ textDecoration: "none", color: "#000", width: "100%" }}
            >
              <Card
                mainIconUrlInBlack="/assets/policyAdminHover.svg"
                className="hover_card"
                mainIconUrl="/assets/policyAdmin.svg"
                MainTitle={"Policy Admin"}
              />
            </Link>
          </div>
          <div>
            <Link
              to="https://travelbuddy.becknprotocol.io/Policies"
              target="_blank"
              style={{ textDecoration: "none", color: "#000", width: "100%" }}
            >
            <Card
              mainIconUrlInBlack="/assets/TravelBuddyAdminHover.svg"
              className="hover_card"
              mainIconUrl="/assets/TravelBuddyAdmin.svg"
              MainTitle={"Policy Admin"}
            />
            </Link>
          </div>
          <div>
            <Link
              to="https://travelbuddy.becknprotocol.io/"
              target="_blank"
              style={{ textDecoration: "none", color: "#000", width: "100%" }}
            >
              <Card
                mainIconUrlInBlack="/assets/travelBuddyApplicationHover.svg"
                className="hover_card"
                mainIconUrl="/assets/travelBuddyApplication.svg"
                MainTitle={"Policy Admin"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectAdmin;
