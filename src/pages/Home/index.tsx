import axios from "axios";
import React, { useEffect, useState } from "react";
import { PokemonTypes } from "../../type";

type AllPokemonType = {
  name: string;
  url: string;
};

const Home = () => {
  const [allPokemon, setAllPokemon] = useState<PokemonTypes[]>([]);

  const getPokemon = async (pokemon: AllPokemonType) => {
    try {
      const result = await axios.get(pokemon.url);
      if (result.status === 200) {
        const { data } = result;
        setAllPokemon((prev) => {
          return [
            ...prev,
            {
              name: data.name,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
              height: data.height,
              weight: data.weight,
              id: data.id,
              types: data.types[0].type.name,
            },
          ];
        });
      }
    } catch (error) {
      alert(error);
    }
  };

  const getAllPokemon = async () => {
    try {
      const result = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=300"
      );
      if (result.status === 200) {
        const { results } = result.data;
        results.map((item: AllPokemonType, index: number) => {
          getPokemon(item);
        });
      }
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    getAllPokemon();
  }, []);
  return <div className="grid grid-cols-6 gap-4">
    {allPokemon.map((item, index)=> (
      <div>{item.name}</div>
    ))}
  </div>;
};

export default Home;
