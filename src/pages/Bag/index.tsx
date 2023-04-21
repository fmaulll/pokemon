import React, { Fragment, useContext } from "react";
import Pokemon from "../../components/Pokemon";
import { PokemonContext } from "../../context/PokemonContext";

const Bag = () => {
  const { bag, removePokemon } = useContext(PokemonContext);

  const handleDeletePokemon = (alias: string) => {
    removePokemon(alias);
  };

  return (
    <div className="grid grid-cols-6 gap-4">
      {bag.length > 0 ? (
        <Fragment>
          {bag.map((pokemon, index) => (
            <Pokemon
              key={index}
              data={pokemon}
              onClickAdd={() => {}}
              onClickDelete={handleDeletePokemon}
              alias={pokemon.alias}
              isInBag={true}
            />
          ))}
        </Fragment>
      ) : (
        <h1 className="text-white">No Pokemons in Bag</h1>
      )}
    </div>
  );
};

export default Bag;
