import React from "react";

const TabletOnlyUp: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="hidden md:block">{children}</div>;
};

export default TabletOnlyUp;
