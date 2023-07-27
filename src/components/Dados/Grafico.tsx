import { useSelector } from "react-redux";
import Skeleton from "../Skeleton/Skeleton";
import { useEffect } from "react";
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
const Grafico = ({data}:any) => {
  
  useEffect(()=>{
    if(data == undefined || data ==null)
    return

    console.log(data)
  },[data])
console.log(data)
  return (
    <>
      <h1>Olá</h1>
    </>
  );
};
export default Grafico;
