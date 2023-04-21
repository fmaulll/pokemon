import React, { FC } from "react";
import {HiPlus} from "react-icons/hi"

interface Props {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const PlusButton: FC<Props> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer absolute top-0 right-0 text-3xl w-12 h-12 mt-2 mr-2 font-bold rounded-full bg-yellow-500 flex justify-center items-center hover:bg-yellow-300 duration-200"
    >
      <HiPlus />
    </div>
  );
};

export default PlusButton;
