import React, { useEffect, useState } from "react";
import "./scss/App.css";
import Router from "./routes";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux/es/exports";
import PokemonsActionTypes from "./redux/pokemons/pokemonsActionType";
import Skeleton from "./components/Skeleton/Skeleton";
const url = process.env.REACT_APP_URL_API;

function App() {
  const { pokemons, allPokemons } = useSelector(
    (root: any) => root.pokemonsReducer
  );
  const [skeleton, setSkeleton] = useState<boolean>(false);
  const [count, setCount] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("chamada")
    getPokemos().then((res)=>{
      console.log()
    GetAllPokemons(res)
    })
  }, []);

  async function GetAllPokemons(contagem:number) {
    console.log("CountApp:", count)
    contagem = Math.ceil(contagem / 3)
    let response = await axios.get(`${url}/pokemon/?limit=${contagem}`);
    let data = response.data;
    dispatch({
      type: PokemonsActionTypes.addAll,
      payload: data,
    });
    return response;
  }



  //Função que retorna um array com todos os nossos pokemons
  async function getPokemos() {
    let urls = [];
    let getUrls = await axios.get(`${url}/pokemon/?offset=0&limit=8`);
    let count = getUrls.data.count;
    let obj = getUrls.data.results;
    for (var i = 0; i < obj.length; i++) {
      urls.push(obj[i].url);
    }
    let response = await axios.all(urls.map((url) => axios.get(url)));
    console.log(response);

    const resposta = response;
    setCount(count);
    dispatch({
      type: PokemonsActionTypes.add,
      payload: {
        resposta,
        count,
      },
    });
    return count
  }

  async function filterPokemons(pagina: number) {
    setSkeleton(true);
    let urls = [];
    let offSet = 8 * pagina - 8;
    console.log("Offset: ", offSet);
    let getUrls = await axios.get(`${url}/pokemon/?offset=${offSet}&limit=8`);
    let count = getUrls.data.count;
    let obj = getUrls.data.results;
    for (var i = 0; i < obj.length; i++) {
      urls.push(obj[i].url);
    }
    let response = await axios
      .all(urls.map((url) => axios.get(url)))
      .then((res) => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setSkeleton(false);
        var resposta = res;
        console.log("Pokemons: ", resposta);
        dispatch({
          type: PokemonsActionTypes.add,
          payload: { resposta, count },
        });
      })
      .catch((err) => {
        console.log(err);
        setSkeleton(false);
      });
  }

  return (
    <>
      {pokemons ? (
        <>
          <Skeleton open={skeleton}></Skeleton>
          <Router filterPokemons={filterPokemons}></Router>
        </>
      ) : (
        <Skeleton open={true} />
      )}
    </>
  );
}

export default App;
