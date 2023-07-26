import React, { useEffect, useState } from "react";
import "./scss/App.css";
import Router from "./routes";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux/es/exports";
import PokemonsActionTypes from "./redux/pokemons/pokemonsActionType";
import Skeleton from "./components/Skeleton/Skeleton";
const url = process.env.REACT_APP_URL_API;



function App() {
  const { pokemons } = useSelector((root: any) => root.pokemonsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    getPokemos().then((res) => {
      const resposta = res.response;
      const count = res.count
      dispatch({
        type: PokemonsActionTypes.add,
        payload: {
          resposta,
          count
        },
      });
    });
  }, []);

//Função que retorna um array com todos os nossos pokemons
async function getPokemos() {
  let urls = [];
  let getUrls = await axios.get(`${url}/pokemon/?offset=0&limit=8`);
  let count = getUrls.data.count
  let obj = getUrls.data.results;
  for (var i = 0; i < obj.length; i++) {
    urls.push(obj[i].url);
  }
  let response = await axios.all(urls.map((url) => axios.get(url)));
  return {response, count};
}



  return <>{pokemons ? <Router></Router> : <Skeleton open={true} />}</>;
}

export default App;
