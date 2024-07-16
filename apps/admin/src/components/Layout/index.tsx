import React from "react";

type LayoutProps = React.PropsWithChildren<{}>;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-screen">
       <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div className="max-w-96 bg-green shadow-lg rounded-lg p-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;