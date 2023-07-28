import React, { useCallback, useEffect, useState } from "react";
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
      getPokemos().then((res)=>{
        setSkeleton(false)
      })
    
  
  }, []);




  //Função que retorna um array com todos os nossos pokemons
  async function getPokemos() {
    let urls = [];
    let getUrls = await axios.get(`${url}/pokemon/?offset=0&limit=64`);
    let count = getUrls.data.count;
    let obj = getUrls.data.results;
    for (var i = 0; i < obj.length; i++) {
      urls.push(obj[i].url);
    }
    let response = await axios.all(urls.map((url) => axios.get(url)));
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

  

  return (
    <>
      {pokemons ? (
        <>
          <Skeleton open={skeleton}></Skeleton>
          <Router></Router>
        </>
      ) : (
        <Skeleton open={true} />
      )}
    </>
  );
}

export default App;
