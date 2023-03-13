import React from "react";
import { Tabs } from "antd";
import "./tabs.css";
interface TabsComponentPropsModal {
  firstProps?: any;
  secondProps?: any;
  thirdProps?: any;
  fourthProps?: any;
  fifthProps?: any;
}

const TabsComponent: React.FC<TabsComponentPropsModal> = ({
  firstProps,
  secondProps,
  thirdProps,
  fourthProps,
  fifthProps,
}: TabsComponentPropsModal) =>{ 
  console.log("Video---->", secondProps)
return(
  <>
    <Tabs
      className="tabsConatiner"
      defaultActiveKey="2"
      items={[
        {
          label: (
            <div>
              <img src="/assets/becknIcon.svg" alt={"Icon"} width={"98%"} />
            </div>
          ),
          key: "1",
          className: "tabs-style",
          disabled: true,
        },
        {
          label: (
            <div style={{ display: "flex" }}>
              <img src="/assets/worldIcon.svg" alt={"Icon"} width={"25%"} />
              <div style={{ paddingLeft: "14.4px" }}>
                <span style={{ width: "60% !important" }}>a world</span>
                <br />
                <span style={{ width: "60% !important" }}>without beckn</span>
              </div>
            </div>
          ),
          key: "2",
          className: "tabs-style",
          children: firstProps,
        },
        {
          label: (
            <div style={{ display: "flex" }}>
              <img src="/assets/bulbIcon.svg" alt={"Icon"} width={"25%"} />
              <div style={{ paddingLeft: "14.4px" }}>
                <span>a world</span>
                <br />
                <span>with beckn</span>
              </div>
            </div>
          ),
          key: "3",
          className: "tabs-style",
          children: secondProps,
        },
        {
          label: (
            <div style={{ display: "flex" }}>
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
            <div style={{ display: "flex" }}>
              <img src="/assets/rocketIcon.svg" alt={"Icon"} width={"25%"} />
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
          className: "tabs-style",
          children: fifthProps,
        },
      ]}
    />
  </>
);}

export default TabsComponent;
