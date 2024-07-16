import React from "react";

const TabletOnlyUp: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="md:hidden">{children}</div>;
};

export default TabletOnlyUp;
