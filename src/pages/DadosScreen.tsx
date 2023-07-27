import { useSelector } from "react-redux";
import Skeleton from "../components/Skeleton/Skeleton";
import NavBar from "../components/NavBar/NavBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shadow } from "./styled";
import Grafico from "../components/Dados/Grafico";
import axios, { all } from "axios";

const DadosScreen = () => {
  const navigate = useNavigate();
  const [skeleton, setSkeleton] = useState<boolean>(false);
  const {allPokemons, count } = useSelector((root:any)=> root.pokemonsReducer)
  const [data, setData] = useState<any>("")
console.log("Count: ", count)
  useEffect(()=>{
    if(allPokemons == null || count ==null)
    return 


  },[allPokemons])

 
  

  return (
    
        
        <>
        <Skeleton open={skeleton}/>
          <NavBar />
          <Shadow>
            {data ? <Grafico data={data}></Grafico> : ""}
          </Shadow>
          </>  
          
    
  );
};

export default DadosScreen;
