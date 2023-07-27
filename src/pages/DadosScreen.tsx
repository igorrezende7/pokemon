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

  useEffect(()=>{
    if(allPokemons == null || count ==null)
    return 
    reducePokemons().then((res:any)=>{
      setSkeleton(false)
      setData(res)
    })
  },[allPokemons])

  async function reducePokemons(){
    setSkeleton(true)
    var result = allPokemons.results;
    let urls=[];
    for(let i = 0; i<count; i++){
      urls.push(result[i].url)
    }
    let allParams = getAllParams(urls)

    return allParams
  }
  

  async function getAllParams(urls:any){
    try {
      let response = await axios.all(urls.map((url:string)=>axios.get(url)))
    return response
    } catch (error) {
      console.log(error)
    }
  }
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
