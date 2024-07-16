import React from "react";

import TabletOnlyUp from "@components/Containers/TabletOnlyUp";
import TabletOnlyDown from "@components/Containers/TabletOnlyDown";
import MobileLayout from "./MobileLayout";
import DesktopLayout from "./DesktopLayout";
import "./classes.css";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <TabletOnlyUp>
        <DesktopLayout>{children}</DesktopLayout>
      </TabletOnlyUp>
      <TabletOnlyDown>
        <MobileLayout>{children}</MobileLayout>
      </TabletOnlyDown>
    </div>
  );
};

export default Layout;
