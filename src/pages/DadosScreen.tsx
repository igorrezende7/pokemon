import { useSelector, useDispatch } from "react-redux";
import Skeleton from "../components/Skeleton/Skeleton";
import NavBar from "../components/NavBar/NavBar";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shadow } from "./styled";
import Grafico from "../components/Dados/Grafico";
import axios, { all } from "axios";
import PokemonsActionTypes from "../redux/pokemons/pokemonsActionType";
interface InfoProps{
  data:any,
  contador:number
}
const DadosScreen = () => {
  const navigate = useNavigate();
  const [skeleton, setSkeleton] = useState<boolean>(false);
  const {pokemons } = useSelector((root:any)=> root.pokemonsReducer)
  const [data, setData]  = useState<any>()
  const dispatch = useDispatch()

  const filterData = useCallback(()=>{
    var maisVida = {valor:0, name:"", img:""};
    var maisForte ={valor:0, name:"", img:""};
    var maisRapido= {valor:0, name:"", img:""};

   if(pokemons){
    console.log(pokemons)
    for(var i=0;i<pokemons.length;i++){

      var nome = pokemons[i]
      var image = pokemons[i].data.sprites.front_default
      if(pokemons[i].data.stats[0].base_stat > maisVida.valor){
        maisVida.valor = pokemons[i].data.stats[0].base_stat;
        maisVida.name = nome
        maisVida.img = image
      }
      if(pokemons[i].data.stats[1].base_stat > maisForte.valor){
        maisForte.valor = pokemons[i].data.stats[1].base_stat;
        maisForte.name = nome;
        maisForte.img = image
      }

      if(pokemons[i].data.stats[5].base_stat > maisRapido.valor){
        maisRapido.valor = pokemons[i].data.stats[5].base_stat;
        maisRapido.name = nome;
        maisRapido.img = image
      }
    }
   }



    var dados = pokemons.reduce((accumulator:any,current:any)=>{
      var tipo = current.data.types[0].type.name
      var existe = accumulator.find((item:any)=>item.tipo === tipo)
      if(existe){
        existe.contador++
      }
      else{
        accumulator.push({tipo:tipo, contador:1})
      }

      dispatch({
        type:PokemonsActionTypes.addAll,
        payload: {maisForte,maisRapido, maisVida, accumulator}
      })
      setData(accumulator)
      return accumulator
    },[])
  },[])
    
  useEffect(()=>{
    if(!data){
      setSkeleton(true)
    }
    setSkeleton(false)
    filterData()
  },[pokemons])

  return (
        <>
        <Skeleton open={skeleton}/>
          <NavBar />
          <Shadow>
            <Grafico></Grafico>
          </Shadow>
          </>  
          
    
  );
};

export default DadosScreen;
