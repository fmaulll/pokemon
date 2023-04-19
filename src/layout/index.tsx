import React, { FC } from "react";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return <div className="min-h-screen bg-gray-800">
    <Header />
    {children}
  </div>;
};

export default Layout;
