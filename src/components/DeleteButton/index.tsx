import React, { FC } from "react";
import { BiTrash } from "react-icons/bi";

interface Props {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const DeleteButton: FC<Props> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer absolute top-0 right-0 text-3xl w-12 h-12 mt-2 mr-2 font-bold rounded-full bg-red-500 flex justify-center items-center hover:bg-red-700 duration-200"
    >
      <BiTrash fill="white" />
    </div>
  );
};

export default DeleteButton;
