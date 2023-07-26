import { useState } from "react";
import CardPokemons from "../components/CardPokemons/CardPokemons";
import ModalPokemons from "../components/ModalPokemons/ModalPokemons";
import NavBar from "../components/NavBar/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { Col } from "react-bootstrap";
import Pagina from "../components/Pagination/Pagination";
import axios from "axios";
import PokemonsActionTypes from "../redux/pokemons/pokemonsActionType";
import Skeleton from "../components/Skeleton/Skeleton";
import { Shadow } from "./styled";
const url = process.env.REACT_APP_URL_API;

const HomeScreen = ({ filterPokemons }: any) => {
  const { pokemons } = useSelector((root: any) => root.pokemonsReducer);
  const [pokemon, setPokemon] = useState("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  function getPokemon(id: any) {
    var id: any = parseInt(id);
    var pokemonFiltrado = pokemons.filter((x: any) => x.data.id === id);
    setPokemon(pokemonFiltrado[0]);
    console.log(pokemonFiltrado[0]);
  }

  function changeModal() {
    setModalOpen(!modalOpen);
    console.log(modalOpen);
  }

  return (
    <>
      <NavBar></NavBar>
      <Shadow>
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

        <Pagina filterPokemons={filterPokemons}></Pagina>
      </Shadow>
    </>
  );
};

export default HomeScreen;
