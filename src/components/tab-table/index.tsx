import React, { useState } from "react";
import { Tab, TabActive, TabContainer, TableWrapper } from "./styles";
import TransactionsTable from "../table";

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
  return (
    <>
      <TabContainer>
        {tabOptions.map(({ id, title }) => (
          <div key={id}>
            <Tab onClick={() => onTabChange(id)} isActive={activeTab === id}>
              {title}
            </Tab>
            {activeTab === id && <TabActive />}
          </div>
        ))}
      </TabContainer>
    </>
  );
};

export default Tabs;
