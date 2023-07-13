import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import "./tabs.css";
import Modal from "../../welcome-page/modal";
interface TabsFaPropsModal {
  firstProps?: any;
  secondProps?: any;
  thirdProps?: any;
  fourthProps?: any;
  FifthProps?: any;
}

const TabsFa: React.FC<TabsFaPropsModal> = ({
  firstProps,
  secondProps,
  thirdProps,
  fourthProps,
  FifthProps,
}: TabsFaPropsModal) => {
  const [flag, setFlag] = useState(true);

  const cityOfLight = localStorage.getItem("name") === "cityOfLight";
  const cityOfAfrica = localStorage.getItem("name") === "cityOfAfrica";
  const PCM = localStorage.getItem("name") === "PCM";
  const OSC = localStorage.getItem("name") === "OSC";

  const openCity = (evt: any, cityName: string) => {
    let i: number;
    let tabcontent: any = [];
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      const currentContent = tabcontent[i].innerHTML;
      tabcontent[i].innerHTML = currentContent;
    }
  };

  return (
    <>
      <Tabs
        className={"tabsConatiner cityOfAfrica PCM_wrapper"}
        defaultActiveKey="3"
        items={[
          {
            label: (
              <div>
                <img
                  style={{ height: "35px", width: "135px" }}
                  // src="/assets/logo2.png"

                  src={"/assets/beckn_lg.svg"}
                  alt={"Icon"}
                  width={"98%"}
                />
              </div>
            ),
            key: "1",
            className: "tabs-style",
            disabled: true,
          },
          {
            label: (
              <div className="tablinks" style={{ display: "flex" }}>
                <img src="/assets/bulbIcon.svg" alt={"Icon"} width={"25%"} />
                <div style={{ paddingLeft: "14.4px" }}>
                  <span>découvrez un monde avec beckn</span>
                </div>
              </div>
            ),
            key: "3",
            className: "tabs-style",
            children: secondProps,
          },

          {
            label: (
              <div>
                <img src="/assets/home.svg" alt={"Icon"} width={"98%"} />
              </div>
            ),
            key: "6",
            className: "home-tabs-style",
            children: <Modal flag={flag} pathName={"/select-experience"} />,
          },
        ]}
      />
    </>
  );
};

export default TabsFa;
