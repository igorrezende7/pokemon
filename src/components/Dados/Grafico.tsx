import { useSelector } from "react-redux";
import Skeleton from "../Skeleton/Skeleton";
import { useCallback, useEffect, useState } from "react";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryHistogram,
  VictoryLabel,
  VictoryLine,
  VictoryScatter,
} from "victory";
import { Col, Container, Row } from "react-bootstrap";


const Grafico = () => {
  const [skeleton, setSkeleton] = useState<boolean>(false)
  const {maisVida, maisRapido, maisForte, dados} = useSelector((root:any)=> root.pokemonsReducer)
  useEffect(()=>{
    console.log(dados)
  },[dados])



  return (
    <>
    <Skeleton open={skeleton}/>
      <h1>Olá</h1>
    </>
  );
};
export default Grafico;
