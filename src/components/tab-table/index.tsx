import React, { useState } from "react";
import Table from "../table/transactions-table";
import IncomeTable from "../table/income-table";
import ExpenseTable from "../table/expense-table";

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
    <div>
      <div style={{ display: "flex", cursor: "pointer" }}>
        <div
          onClick={() => setActiveTab(0)}
          style={{
            marginRight: "10px",
            padding: "10px",
            backgroundColor: activeTab === 0 ? "#ccc" : "#eee",
          }}
        >
          All Transactions
        </div>
        <div
          onClick={() => setActiveTab(1)}
          style={{
            marginRight: "10px",
            padding: "10px",
            backgroundColor: activeTab === 1 ? "#ccc" : "#eee",
          }}
        >
          Income
        </div>
        <div
          onClick={() => setActiveTab(2)}
          style={{
            padding: "10px",
            backgroundColor: activeTab === 2 ? "#ccc" : "#eee",
          }}
        >
          Expense
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>{renderTable()}</div>
    </div>
  );
};

export default TabTable;
