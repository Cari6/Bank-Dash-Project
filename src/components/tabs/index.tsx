import React from "react";
import { Tab, TabActive, TabContainer } from "./styles";

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
      <div style={{ display: "flex" }}>
        {tabOptions.map(({ id, title }) => (
          <Tab
            key={id}
            onClick={() => onTabChange(id)}
            isActive={activeTab === id}
          >
            {title}
          </Tab>
        ))}
      </div>
      <TabActive position={activeIndex} count={tabOptions.length} />
    </TabContainer>
  );
};

export default Tabs;
