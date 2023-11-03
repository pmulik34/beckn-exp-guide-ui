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
      {cityOfLight ? (
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
                    <span style={{ width: "60% !important" }}>un monde</span>
                    <br />
                    <span style={{ width: "60% !important" }}>
                      sans {cityOfLight ? "ROCC" : "beckn"}
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
                    <span>un monde</span>
                    <br />
                    <span>avec {cityOfLight ? "ROCC" : "beckn"}</span>
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
                    <span>derrière les</span>
                    <br />
                    <span>coulisses</span>
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
                    <span>Imaginer le </span> <span>futur</span>
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
      ) : (
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
                    <span>Dans les coulisses</span>
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
      )}
    </>
  );
};

export default TabsFa;
