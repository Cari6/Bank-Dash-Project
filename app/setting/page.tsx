"use client";
import React, { useState } from "react";
import { Container } from "./styles";
import { Tabs } from "@/src/components";
import {
  renderSetting,
  tabOptionsSetting,
} from "@/src/utils/tabs-transactions";

const SettingPage = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleActiveTab = (id: number) => {
    setActiveTab(id);
  };
  return (
    <Container>
      <Tabs
        activeTab={activeTab}
        onTabChange={handleActiveTab}
        tabOptions={tabOptionsSetting}
      />
      <div style={{ marginTop: 20 }}>{renderSetting[activeTab]}</div>
    </Container>
  );
};

export default SettingPage;
