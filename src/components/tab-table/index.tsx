import React, { useState } from "react";
import { Tab, TabActive, TabContainer, TableWrapper } from "./styles";
import TransactionsTable from "../table";
import { renderTable, tabOptions } from "@/src/utils/tabs-transactions";

const TabTable = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <>
      <TabContainer>
        {tabOptions.map(({ id, title }) => (
          <div key={id}>
            <Tab onClick={() => setActiveTab(id)} isActive={activeTab === id}>
              {title}
            </Tab>
            {activeTab === id && <TabActive />}
          </div>
        ))}
      </TabContainer>
      <TableWrapper>
        <TransactionsTable {...renderTable[activeTab]} />
      </TableWrapper>
    </>
  );
};

export default TabTable;
