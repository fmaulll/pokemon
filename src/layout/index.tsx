import React, { FC, useContext } from "react";
import ModalLoader from "../components/ModalLoader";
import { PokemonContext } from "../context/PokemonContext";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const { loading } = useContext(PokemonContext);
  return (
    <div className="min-h-screen bg-gray-800">
      <Header />
      <div className="px-8 py-4">{children}</div>
      {loading ? <ModalLoader /> : null}
    </div>
  );
};

export default Layout;
