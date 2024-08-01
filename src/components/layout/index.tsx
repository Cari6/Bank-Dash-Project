import React, { ReactNode } from "react";
import Header from "../header";
import { Sidebar } from "..";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Sidebar />
      <Header />
      <div style={{ marginTop: 100, marginLeft: 250, padding: 40 }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
