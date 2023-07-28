import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Skeleton from "../Skeleton/Skeleton";
import { Col, Container, Row } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";
import { H2 } from "../../styled/font";
import { Card, CardImage, CardSubTitle, CardTitle } from "../../styled/cards";

const Grafico = () => {
  const [skeleton, setSkeleton] = useState(true);
  const { dados,maisVida, maisRapido, maisForte } = useSelector((root:any) => root.dadosReducer);

console.log(maisForte)
  useEffect(() => {
    if (dados.length > 0) {
      setSkeleton(false); // Oculta o Skeleton quando os dados estiverem prontos
    }
  }, [dados]);

  const options:any = {
    chart: {
      type: "bar",
      height:'300px'
    },
    xaxis: {
      categories: dados.map((item:any) => item.tipo),
    },
  };

  const series = [
    {
      name: "Quantidade",
      data: dados.map((item:any) => item.contador),
    },
  ];

  return (
    <>
      <Skeleton open={skeleton} />
      <Row className="justify-content-center">
        <H2 className="text-center py-5">Tipos de pokémons</H2>
        <Col xs={12} md={10} className="pb-5">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={400}
          width='100%'
        />
        </Col>
      </Row>

      <Row className="justify-content-center">
      <Col xs={10}>
          <H2 className="text-center py-3">Mais forte</H2>
          </Col>
        <Col xs={8} md={6} lg={4}>
          <Card hover={true}>
          <CardImage>
                  <img src={maisForte.dados.image} alt="" />
            </CardImage>

            <CardTitle>
                  {maisForte.dados.name.charAt(0).toUpperCase() +
                    maisForte.dados.name.slice(1)}
              </CardTitle>
              <CardSubTitle>
                  Ataque: {maisForte.dados.valor}
              </CardSubTitle>
          </Card>
        </Col>
      </Row>


      <Row className="justify-content-center pt-5">
      <Col xs={10}>
          <H2 className="text-center py-3">Mais RÁPIDO</H2>
          </Col>
        <Col xs={8} md={6} lg={4}>
          <Card hover={true}>
          <CardImage>
                  <img src={maisRapido.dados.image} alt="" />
            </CardImage>

            <CardTitle>
                  {maisRapido.dados.name.charAt(0).toUpperCase() +
                    maisRapido.dados.name.slice(1)}
              </CardTitle>
              <CardSubTitle>
                  Velocidade: {maisRapido.dados.valor}
              </CardSubTitle>
          </Card>
        </Col>
      </Row>


      <Row className="justify-content-center pt-5">
      <Col xs={10}>
          <H2 className="text-center py-3">Mais resistente</H2>
          </Col>
        <Col xs={8} md={6} lg={4}>
          <Card hover={true}>
          <CardImage>
                  <img src={maisVida.dados.image} alt="" />
            </CardImage>

            <CardTitle>
                  {maisVida.dados.name.charAt(0).toUpperCase() +
                    maisVida.dados.name.slice(1)}
              </CardTitle>
              <CardSubTitle>
                  Resistência: {maisVida.dados.valor}
              </CardSubTitle>
          </Card>
        </Col>
      </Row>

    </>
  );
};

export default Grafico;
