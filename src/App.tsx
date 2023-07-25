import React, { useEffect, useState } from "react";
import "./scss/App.css";
import Router from "./routes";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux/es/exports";
import PokemonsActionTypes from "./redux/pokemons/pokemonsActionType";
import Skeleton from "./components/Skeleton/Skeleton";
const url = process.env.REACT_APP_URL_API;

//Função que retorna um array com todos os nossos pokemons
async function getPokemos() {
  let urls = [];
  let getUrls = await axios.get(`${url}/pokemon`);
  let obj = getUrls.data.results;
  for (var i = 0; i < obj.length; i++) {
    urls.push(obj[i].url);
  }
  let response = await axios.all(urls.map((url) => axios.get(url)));
  return response;
}

function App() {
  const { pokemons } = useSelector((root: any) => root.pokemonsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    getPokemos().then((res) => {
      //Pega o peso e altura média de todos pokemons
      let tamanho = res.length;
      const somaPeso = res.reduce((x, objeto) => x + objeto.data.weight, 0);
      const somaAltura = res.reduce((x, objeto) => x + objeto.data.height, 0);
      const pesoMedio = somaPeso / tamanho;
      const alturaMedia = somaAltura / tamanho;

      //Pega alguns parametros
      let maiorPeso = res[0].data.weight;
      let maiorAltura = res[0].data.height;
      let totalMoves = res[0].data.moves.length;

      for (let i = 0; i < tamanho; i++) {
        if (res[i].data.weight > maiorPeso) {
          maiorPeso = res[i].data.weight;
        }
        if (res[i].data.height > maiorAltura) {
          maiorAltura = res[i].data.height;
        }
        if (res[i].data.moves.length > totalMoves) {
          totalMoves = res[i].data.moves.length;
        }
      }

      const resposta = res;
      dispatch({
        type: PokemonsActionTypes.add,
        payload: {
          resposta,
          pesoMedio,
          alturaMedia,
          maiorPeso,
          maiorAltura,
          totalMoves,
        },
      });
    });
  }, []);
  return <>{pokemons ? <Router></Router> : <Skeleton />}</>;
}

export default App;
