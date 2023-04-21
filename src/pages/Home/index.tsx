import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dialog from "../../components/Dialog";
import Pokemon from "../../components/Pokemon";
import { PokemonContext } from "../../context/PokemonContext";
import { PokemonTypes } from "../../type";

type AllPokemonType = {
  name: string;
  url: string;
};

const Home = () => {
  const { addPokemon, setLoading, removePokemon } = useContext(PokemonContext);
  const navigate = useNavigate()
  const [allPokemon, setAllPokemon] = useState<PokemonTypes[]>([]);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [chosenPokemon, setChosenPokemon] = useState<PokemonTypes>({
    name: "",
    height: 0,
    id: 0,
    image: "",
    types: "",
    weight: 0,
  });

  const getPokemon = async (pokemon: AllPokemonType) => {
    try {
      const result = await axios.get(pokemon.url);
      if (result.status === 200) {
        const { data } = result;
        setAllPokemon((prev) => {
          return [
            ...prev,
            {
              name:
                data.name[0].toUpperCase() +
                data.name.slice(1, data.name.length),
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
              height: data.height,
              weight: data.weight,
              id: data.id,
              types: data.types[0].type.name,
            },
          ];
        });
        setLoading(false)
      }
    } catch (error) {
      alert(error);
    }
  };

  const getAllPokemon = async () => {
    setLoading(true)
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

  const handleClickAddPokemon = (data: PokemonTypes) => {
    setChosenPokemon(data);
    handleOpenDialog();
    // addPokemon({ ...data, alias: "" });
  };

  const handleAddPokemon = (data: PokemonTypes, alias: string) => {
    if (!alias) {
      return;
    }
    addPokemon({ ...data, alias });
    navigate("/pokemon/bag")
  };

  const handleOpenDialog = () => {
    setOpenDialog(!openDialog);
  };

  useEffect(() => {
    getAllPokemon();
  }, []);
  return (
    <div className="grid grid-cols-6 gap-4">
      {allPokemon.map((item, index) => (
        <Pokemon alias="" isInBag={false} data={item} key={index} onClickAdd={handleClickAddPokemon} onClickDelete={() => {}} />
      ))}
      {openDialog ? (
        <Dialog
          data={chosenPokemon}
          handleAddPokemon={handleAddPokemon}
          onClose={handleOpenDialog}
        />
      ) : null}
    </div>
  );
};

export default Home;
