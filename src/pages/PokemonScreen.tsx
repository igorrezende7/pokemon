import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { useEffect, useState } from "react";
import Skeleton from "../components/Skeleton/Skeleton";

const PokemonScreen = () => {
  const { pokemons } = useSelector((root: any) => root.pokemonsReducer);
  const { id }: any = useParams();
  const [load, setLoad] = useState<boolean>(true);
  const [pokemon, setPokemon] = useState("");
  useEffect(() => {
    var idPokemon = parseInt(id);
    const pokemonFiltrado = pokemons.filter(
      (pokemon: any) => pokemon.data.id === idPokemon
    );
    setPokemon(pokemonFiltrado);
    setLoad(false);
    console.log(pokemonFiltrado);
  }, []);
  return (
    <>
      {load ? (
        <Skeleton />
      ) : (
        <>
          <NavBar></NavBar>
          <h1>KKKK</h1>
        </>
      )}
    </>
  );
};

export default PokemonScreen;
