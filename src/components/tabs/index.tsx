import React from "react";
import {
  Border,
  Tab,
  TabActive,
  TabContainer,
  TabContainerInner,
} from "./styles";

interface TabOption {
  id: number;
  title: string;
}

interface TabTableProps {
  tabOptions: TabOption[];
  activeTab: number;
  onTabChange: (id: number) => void;
}

const Tabs = ({ tabOptions, activeTab, onTabChange }: TabTableProps) => {
  const activeIndex = tabOptions.findIndex((option) => option.id === activeTab);
  return (
    <TabContainer>
      <TabContainerInner>
        {tabOptions.map(({ id, title }) => (
          <Tab
            key={id}
            onClick={() => onTabChange(id)}
            isActive={activeTab === id}
          >
            <span>{title}</span>
          </Tab>
        ))}
        <TabActive position={activeIndex} count={tabOptions.length} />
      </TabContainerInner>

      <Border />
    </TabContainer>
  );
};

export default Tabs;
