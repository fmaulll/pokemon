import { createContext, FC, useEffect, useState } from "react";
import { PokemonBagTypes } from "../type";

interface Props {
  children: React.ReactNode;
}

interface PokemonContextData {
  bag: PokemonBagTypes[];
  loading: boolean;
  addPokemon: (data: PokemonBagTypes) => void;
  removePokemon: (alias: string) => void;
  setLoading: (bool: boolean) => void;
}

const initialValue = {
  bag: [],
  loading: false,
  addPokemon: () => {},
  removePokemon: () => {},
  setLoading: () => {},
};

export const PokemonContext = createContext<PokemonContextData>(initialValue);

const { Provider } = PokemonContext;

const PokemonProvider: FC<Props> = ({ children }) => {
  const [bag, setBag] = useState<PokemonBagTypes[]>([]);
  const [loading, setLoadingPokemon] = useState<boolean>(false);

  const setLoading = (bool: boolean) => {
    setLoadingPokemon(bool);
  };

  const addPokemon = (data: PokemonBagTypes) => {
    setBag((prev) => {
      return [...prev, data];
    });
  };

  const removePokemon = (alias: string) => {
    setBag((prev) => {
      const arr: any = [];
      prev.map((item) => {
        if (item.alias !== alias) {
          arr.push(item);
        }
      });
      return arr;
    });
  };

  return (
    <Provider value={{ bag, loading, addPokemon, removePokemon, setLoading }}>
      {children}
    </Provider>
  );
};

export default PokemonProvider;
