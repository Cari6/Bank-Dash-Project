"use client";
import React, { useState } from "react";
import { Container } from "./styles";
import { EditProfile, Preferences, Security, Tabs } from "@/src/components";
import { tabOptionsSetting } from "@/src/utils/tabs-transactions";

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
      <div style={{ marginTop: 20 }}>
        {activeTab === 0 && <EditProfile />}
        {activeTab === 1 && <Preferences />}
        {activeTab === 2 && <Security />}
      </div>
    </Container>
  );
};

export default SettingPage;
