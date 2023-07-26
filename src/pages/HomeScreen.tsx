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


const HomeScreen = () => {
  
  const { pokemons} =
    useSelector((root: any) => root.pokemonsReducer);
  const [pokemon, setPokemon] = useState("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [skeleton, setSkeleton] = useState<boolean>(false)
  const dispatch = useDispatch()

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

  async function filterPokemons(pagina:number){
    setSkeleton(true)
    let urls = [];
    let offSet = (8 * pagina) - 8;
    console.log("Offset: ", offSet)
    let getUrls = await axios.get(`${url}/pokemon/?offset=${offSet}&limit=8`);
    let count = getUrls.data.count
    let obj = getUrls.data.results;
    for (var i = 0; i < obj.length; i++) {
      urls.push(obj[i].url);
    }
    let response = await axios.all(urls.map((url) => axios.get(url)))
    .then((res)=>{
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setSkeleton(false)
      var resposta = res;
      console.log("Pokemons: ",resposta)
      dispatch({
        type:PokemonsActionTypes.add,
        payload:{resposta, count}
      })
    })
    .catch((err)=>{
      console.log(err)
      setSkeleton(false)
    })
  }

  return (
    <>
        <Skeleton open={skeleton}></Skeleton>
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