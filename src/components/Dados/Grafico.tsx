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
const Grafico = () => {
  const { maiorPeso, maiorAltura, maisForte, tipos, count, allPokemons } =
    useSelector((root: any) => root.pokemonsReducer);

  console.log(
    "MaiorPeso: ",
    maiorPeso,
    " MaiorAltura: ",
    maiorAltura,
    " MaisForte: ",
    maisForte,
    " Tipos: ",
    tipos,
    " Count: ",
    count
  );

  const data = [
    tipos.map((item: any, key: number) => ({
      x: item.tipo.slice(0, 2),
      y: item.contador,
    })),
  ];

  const amount = data.map(({ y }) => y);
  const min = Math.min(...amount);
  const max = Math.max(...amount);

  return (
    <>
      {allPokemons ? (
        <>
          <Container>
            <Row className="justify-content-center">
              <Col md={10} xs={12}>
                <VictoryChart domainPadding={{ x: 5, y: 0 }}>
                  <VictoryBar
                    data={tipos}
                    x={(d) => d.tipo.slice(0, 2)}
                    y={(d) => d.contador}
                  />
                  <VictoryAxis
                    label="Tipos"
                    style={{
                      axisLabel: { padding: 30 },
                    }}
                  />
                  <VictoryAxis
                    dependentAxis
                    label=""
                    style={{
                      axisLabel: { padding: 0 },
                    }}
                  />
                </VictoryChart>
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <Skeleton open={true} />
      )}
    </>
  );
};
export default Grafico;
