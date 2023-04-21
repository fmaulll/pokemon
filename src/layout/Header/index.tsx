import React from "react";
import Pokeball from "../../assets/Pokeball.webp";
import { useNavigate } from "react-router-dom";
import {GiSchoolBag} from "react-icons/gi"

const Header = () => {
  const navigate = useNavigate();

  const handleClickTitle = () => {
    navigate("/pokemon/");
  };

  const handleClickBag = () => {
    navigate("/pokemon/bag");
  };

  return (
    <div className="h-20 bg-yellow-500 flex justify-between items-center px-8">
      <h1
        onClick={handleClickTitle}
        className="text-2xl font-bold flex justify-center items-center hover:text-red-500 duration-200 cursor-pointer"
      >
        <img className="w-10 mr-2" src={Pokeball} alt="Pokeball" /> Pokemon
      </h1>
      <div
        onClick={handleClickBag}
        className="cursor-pointer p-2 w-16 flex justify-center items-center hover:bg-yellow-300 duration-200 rounded-full"
      >
        <GiSchoolBag size={50} />
      </div>
    </div>
  );
};

export default Header;
