import React, { useCallback, useEffect, useState } from "react";
import HeaderTab from "../headerTab/HeaderTab";
import Modal from "../../welcome-page/modal";
import Dsep from "../product/Dsep";

const ChooseExperienceDsep = () => {
  const [flag, setFlag] = useState(true);

  const tabs = [
    {
      key: "logo",
      label: (
        <div>
          <img
            style={{ height: "35px", width: "135px" }}
            src={"/assets/beckn_lg.svg"}
            alt={"Icon"}
            width={"98%"}
          />
        </div>
      ),
      content: "",
      disabled: true,
    },
    {
      key: "forDSEP",
      label: (
        <div
          className="tablinks"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img src="/assets/bulbIcon.svg" alt={"Icon"} width={"25%"} />
          <div style={{ paddingLeft: "14.4px" }}>
            <span>experience a world with beckn</span>
          </div>
        </div>
      ),
      content: <Dsep />,
      disabled: false,
    },
    {
      key: "ForHomeIcon",
      label: (
        <div>
          <img src="/assets/home.svg" alt={"Icon"} width={"98%"} />
        </div>
      ),
      content: <Modal flag={flag} pathName={"/select-experience"} />,
      disabled: false,
    },
  ];

  return (
    <div className="choosingExp_wrapper">
      <HeaderTab
        tabClassName="DSEP-tab"
        tabs={tabs}
        defaultActiveKey={"forDSEP"}
      />
    </div>
  );
};

export default ChooseExperienceDsep;
