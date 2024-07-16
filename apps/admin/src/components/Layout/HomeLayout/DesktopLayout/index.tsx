import React from "react";

import Sidebar from "@components/Sidebar";
import Footer from "@components/Layout/HomeLayout/Footer";

import "./classes.css";
import { useMenuData } from "./useMenuData";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const menuData = useMenuData();

  return (
    <div className="desktop-layout-container flex min-h-screen">
      <Sidebar menuItems={menuData} />
      <div className="desktop-children-wrapper flex flex-col flex-grow">
        <div className="content flex-grow p-10">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
