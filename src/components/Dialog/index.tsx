import React, {
  FC,
  HtmlHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import { PokemonTypes } from "../../type";
import OutsideWrapper from "../OutsideWrapper";
import { RxCross2 } from "react-icons/rx";

interface Props {
  data: PokemonTypes;
  handleAddPokemon: (data: PokemonTypes, alias: string) => void;
  onClose: () => void;
}

const Dialog: FC<Props> = ({ data, handleAddPokemon, onClose }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [alias, setAlias] = useState<string>("");
  const handleClose = () => {
    setAlias("");
    onClose();
  };

  const handleChangeAlias = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlias(e.currentTarget.value);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="h-screen bg-[rgba(0,0,0,0.6)] w-full top-0 left-0 fixed flex justify-center items-center">
      <OutsideWrapper callback={handleClose}>
        <div className="bg-white rounded-xl flex justify-center items-center flex-col p-8">
          <div className="w-full flex justify-end">
            <div
              onClick={handleClose}
              className="hover:bg-red-500 rounded-full p-2 cursor-pointer"
            >
              <RxCross2 size={30} />
            </div>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img className="w-44" src={data?.image} />
            <h1 className="text-2xl">
              Give an alias for <span className="font-bold">{data?.name}</span>
            </h1>
          </div>
          <form onSubmit={() => handleAddPokemon(data, alias)}>
            <input
              ref={inputRef}
              value={alias}
              onChange={handleChangeAlias}
              className="w-full p-4 border rounded-lg text-2xl mt-4"
              placeholder="Type an alias"
              type="text"
            />
            <button className="w-full p-4 rounded-lg bg-yellow-500 font-bold mt-4">
              Submit
            </button>
          </form>
        </div>
      </OutsideWrapper>
    </div>
  );
};

export default Dialog;
