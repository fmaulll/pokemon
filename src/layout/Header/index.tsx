import React from "react";
import Pokeball from "../../assets/Pokeball.webp";
import Bag from "../../assets/Bag.png";

const Header = () => {
  return (
    <div className="h-20 bg-yellow-500 flex justify-between items-center px-8">
      <h1 className="text-2xl font-bold flex justify-center items-center">
        <img className="w-10 mr-2" src={Pokeball} alt="Pokeball" /> Pokemon
      </h1>
      <div className="cursor-pointer p-2 w-16 flex justify-center items-center hover:bg-gray-400 rounded-full">
        <img src={Bag} alt="Bag" />
      </div>
    </div>
  );
};

export default Header;
