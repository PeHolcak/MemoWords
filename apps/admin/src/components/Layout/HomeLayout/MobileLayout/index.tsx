import React from "react";

const MobileLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="mobile-children-wrapper">{children}</div>;
};

export default MobileLayout;
