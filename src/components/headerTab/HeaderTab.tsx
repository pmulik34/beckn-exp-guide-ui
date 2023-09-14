import React from "react";
import { Tabs } from "antd";

interface TabProps {
  key: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

interface TabsComponentPropsModal {
  tabs: TabProps[];
  defaultActiveKey: string;
  tabClassName: string;
}

const HeaderTab: React.FC<TabsComponentPropsModal> = (props) => {
  return (
    <>
      <Tabs
        className={props.tabClassName}
        defaultActiveKey={props.defaultActiveKey}
      >
        {props.tabs.map((tab) => (
          <Tabs.TabPane key={tab.key} tab={tab.label} disabled={tab.disabled}>
            {tab.content}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </>
  );
};

export default HeaderTab;
