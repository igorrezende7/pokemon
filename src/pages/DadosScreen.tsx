import { useSelector, useDispatch } from "react-redux";
import Skeleton from "../components/Skeleton/Skeleton";
import NavBar from "../components/NavBar/NavBar";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shadow } from "./styled";
import Grafico from "../components/Dados/Grafico";
import axios, { all } from "axios";
import PokemonsActionTypes from "../redux/pokemons/pokemonsActionType";
import Dados from '../Services/dados'
import dadosActionTypes from "../redux/Dados/dadosActionTypes";
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
  const {dados} = useSelector((root:any)=> root.dadosReducer)
  const filterData = useCallback(()=>{
    var maisVida = new Dados();
    var maisForte =new Dados();
    var maisRapido= new Dados();

   if(pokemons){
    for(var i=0;i<pokemons.length;i++){

      var nome = pokemons[i].data.name
      var image = pokemons[i].data.sprites.front_default
      if(pokemons[i].data.stats[0].base_stat > maisVida.dados.valor){
        maisVida.dados.valor = pokemons[i].data.stats[0].base_stat;
        maisVida.dados.name = nome
        maisVida.dados.image = image
      }
      if(pokemons[i].data.stats[1].base_stat > maisForte.dados.valor){
        maisForte.dados.valor = pokemons[i].data.stats[1].base_stat;
        maisForte.dados.name = nome;
        maisForte.dados.image = image
      }

      if(pokemons[i].data.stats[5].base_stat > maisRapido.dados.valor){
        maisRapido.dados.valor = pokemons[i].data.stats[5].base_stat;
        maisRapido.dados.name = nome;
        maisRapido.dados.image = image
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
        type:dadosActionTypes.add,
        payload: {maisForte,maisRapido, maisVida, accumulator}
      })
      setData(accumulator)
      return accumulator
    },[])
  },[pokemons])
    
  useEffect(()=>{
    if(!data){
      setSkeleton(true)
    }
    setSkeleton(false)
    filterData()
  },[filterData])

  return (
        <>
          {dados ? 
          <>
              <Skeleton open={skeleton}/>
         <NavBar />
         <Shadow>
           <Grafico></Grafico>
         </Shadow>
          </>
         
         :
         <Skeleton open={true}/>
        }
        </>  
          
    
  );
};

export default DadosScreen;
