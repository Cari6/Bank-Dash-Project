import React, { useState } from "react";
import Table from "../table/transactions-table";
import IncomeTable from "../table/income-table";
import ExpenseTable from "../table/expense-table";
import { Tab, TabActive, TabContainer, TableWrapper } from "./styles";

const TabTable = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const renderTable = () => {
    switch (activeTab) {
      case 0:
        return <Table />;
      case 1:
        return <IncomeTable />;

      case 2:
        return <ExpenseTable />;

      default:
        return <Table />;
    }
  };

  return (
    <>
      <TabContainer>
        <div>
          <Tab onClick={() => setActiveTab(0)} isActive={activeTab === 0}>
            All Transactions
          </Tab>
          {activeTab === 0 && <TabActive />}
        </div>

        <div>
          <Tab onClick={() => setActiveTab(1)} isActive={activeTab === 1}>
            Income
          </Tab>
          {activeTab === 1 && <TabActive />}
        </div>

        <div>
          <Tab onClick={() => setActiveTab(2)} isActive={activeTab === 2}>
            Expense
          </Tab>
          {activeTab === 2 && <TabActive />}
        </div>
      </TabContainer>

      <TableWrapper>{renderTable()}</TableWrapper>
    </>
  );
};

export default TabTable;
