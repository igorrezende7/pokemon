import { useState } from "react";
import CardPokemons from "../components/CardPokemons/CardPokemons";
import ModalPokemons from "../components/ModalPokemons/ModalPokemons";
import NavBar from "../components/NavBar/NavBar";
import { useSelector } from "react-redux";
const HomeScreen = () => {
  const { pokemons, pesoMedio, alturaMedia, maiorPeso, maiorAltura } =
    useSelector((root: any) => root.pokemonsReducer);
  const [pokemon, setPokemon] = useState("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  console.log("Maior Peso: ", maiorPeso, " Maior Altura: ", maiorAltura);

  function getPokemon(id: any) {
    var id: any = parseInt(id);
    var pokemonFiltrado = pokemons.filter((x: any) => x.data.id === id);
    setPokemon(pokemonFiltrado);
    console.log(pokemonFiltrado);
  }

  function changeModal() {
    setModalOpen(!modalOpen);
    console.log(modalOpen);
  }

  return (
    <>
      <NavBar></NavBar>
      <CardPokemons
        changeModal={changeModal}
        pokemons={pokemons}
        getPokemon={getPokemon}
      ></CardPokemons>
      <ModalPokemons
        open={modalOpen}
        changeModal={changeModal}
        pokemon={pokemon}
      ></ModalPokemons>
    </>
  );
};

export default HomeScreen;
