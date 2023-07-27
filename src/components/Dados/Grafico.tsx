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

    if (data !== null && data !==null){
      fiterData()
    }
    
  },[data])

  function fiterData(){
    const result = data.reduce((accumulator:any , current:any )=>{
      var tipo = current.data.types[0].type.name
      // console.log(accumulator)
      // const existe = accumulator.find((item:any) => item.tipo === tipo);
      // if(existe){

      // }
    })
  }



  return (
    <>
      <h1>Olá</h1>
    </>
  );
};
export default Grafico;
