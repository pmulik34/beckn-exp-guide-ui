import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import "./tabs.css";
import Modal from "../../welcome-page/modal";
interface TabsComponentPropsModal {
  firstProps?: any;
  secondProps?: any;
  thirdProps?: any;
  fourthProps?: any;
  FifthProps?: any;
}

const TabsComponent: React.FC<TabsComponentPropsModal> = ({
  firstProps,
  secondProps,
  thirdProps,
  fourthProps,
  FifthProps,
}: TabsComponentPropsModal) => {
  const [flag, setFlag] = useState(true);

  const cityOfLight = localStorage.getItem("name") === "cityOfLight";
  const cityOfAfrica = localStorage.getItem("name") === "cityOfAfrica";
  const PCM = localStorage.getItem("name") === "PCM";
  const OSC = localStorage.getItem("name") === "OSC";
  const DSEP = localStorage.getItem("name") === "DSEP";
  const UEI = localStorage.getItem("name") === "UEI";
  const isDsepUnified = localStorage.getItem("name") === "dsepUnified";
  const DSNP = localStorage.getItem("name") === "DSNP";
  const DHP = localStorage.getItem("name") === "DHP";

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
      {DSEP || UEI || isDsepUnified || DSNP || DHP ? (
        <Tabs
          className={"tabsConatiner cityOfAfrica DSEP_Wrapper"}
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
                    <span>experience a world with beckn</span>
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
      ) : PCM || OSC ? (
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
                  <img src="/assets/worldIcon.svg" alt={"Icon"} width={"25%"} />
                  <div style={{ paddingLeft: "14.4px" }}>
                    <span>behind the scenes</span>
                  </div>
                </div>
              ),
              key: "2",
              className: "tabs-style",
              children: firstProps,
            },
            {
              label: (
                <div className="tablinks" style={{ display: "flex" }}>
                  <img src="/assets/bulbIcon.svg" alt={"Icon"} width={"25%"} />
                  <div style={{ paddingLeft: "14.4px" }}>
                    <span>experience a world with beckn</span>
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
      ) : cityOfAfrica ? (
        <Tabs
          className={"tabsConatiner cityOfAfrica"}
          defaultActiveKey="2"
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
                <div
                  className="tablinks"
                  style={{ display: "flex", alignItems: "center" }}
                  onClick={(event) => openCity(event, "aWorldWithoutBeckn")}
                >
                  <img src="/assets/worldIcon.svg" alt={"Icon"} width={"25%"} />
                  <div style={{ paddingLeft: "14.4px" }}>
                    <span style={{ width: "60% !important" }}>
                      {"Imagine with us"}
                    </span>
                  </div>
                </div>
              ),
              key: "2",
              className: "tabs-style",
              children: firstProps,
            },
            {
              label: (
                <div className="tablinks" style={{ display: "flex" }}>
                  <img src="/assets/bulbIcon.svg" alt={"Icon"} width={"25%"} />
                  <div style={{ paddingLeft: "14.4px" }}>
                    <span>a world with beckn</span>
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
      ) : (
        <Tabs
          className="tabsConatiner"
          defaultActiveKey="2"
          items={[
            {
              label: (
                <div>
                  <img
                    style={
                      cityOfLight
                        ? { height: "unset", width: "unset" }
                        : { height: "35px", width: "135px" }
                    }
                    // src="/assets/logo2.png"

                    src={
                      cityOfLight ? "/assets/logo2.png" : "/assets/beckn_lg.svg"
                    }
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
                <div
                  className="tablinks"
                  style={{ display: "flex" }}
                  onClick={(event) => openCity(event, "aWorldWithoutBeckn")}
                >
                  <img src="/assets/worldIcon.svg" alt={"Icon"} width={"25%"} />
                  <div className="worldIcon" style={{ paddingLeft: "14.4px" }}>
                    <span style={{ width: "60% !important" }}>a world</span>
                    <br />
                    <span style={{ width: "60% !important" }}>
                      without {cityOfLight ? "ROCC" : "beckn"}
                    </span>
                  </div>
                </div>
              ),
              key: "2",
              className: "tabs-style",
              children: firstProps,
            },
            {
              label: (
                <div className="tablinks" style={{ display: "flex" }}>
                  <img src="/assets/bulbIcon.svg" alt={"Icon"} width={"25%"} />
                  <div style={{ paddingLeft: "14.4px" }}>
                    <span>a world</span>
                    <br />
                    <span>with {cityOfLight ? "ROCC" : "beckn"}</span>
                  </div>
                </div>
              ),
              key: "3",
              className: "tabs-style",
              children: secondProps,
            },
            {
              label: (
                <div
                  className="tablinks"
                  style={{ display: "flex" }}
                  onClick={(event) => openCity(event, "behiendTheScenes")}
                >
                  <img src="/assets/videoIcon.svg" alt={"Icon"} width={"25%"} />
                  <div style={{ paddingLeft: "14.4px" }}>
                    <span>behind the</span>
                    <br />
                    <span>scenes</span>
                  </div>
                </div>
              ),
              key: "4",
              className: "tabs-style",
              children: thirdProps,
            },
            {
              label: (
                <div
                  className="tablinks"
                  style={{ display: "flex" }}
                  onClick={(event) => openCity(event, "imaginingTheFuture")}
                >
                  <img
                    src="/assets/rocketIcon.svg"
                    alt={"Icon"}
                    width={"25%"}
                  />
                  <div style={{ paddingLeft: "14.4px" }}>
                    <span>imagining the</span>
                    <br />
                    <span>future</span>
                  </div>
                </div>
              ),
              key: "5",
              className: "tabs-style",
              children: fourthProps,
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
      )}
    </>
  );
};

export default TabsComponent;
