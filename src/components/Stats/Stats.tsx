import { Col, Row } from "react-bootstrap";
import { Stat, Statistics, StatsContent, TitleStat } from "../../styled/stats";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
interface ValuesProps {
  peso: number;
  altura: number;
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}
interface StatsProps {
  pokemon: any;
}
const Stats = ({ pokemon }: StatsProps) => {
  const { maiorPeso, maiorAltura } = useSelector(
    (root: any) => root.pokemonsReducer
  );
  const [objPokemon, setObjPokemon] = useState<any>("");
  const [values, setValues] = useState<ValuesProps>({
    peso: 0,
    altura: 0,
    hp: 0,
    attack: 0,
    defense: 0,
    specialAttack: 0,
    specialDefense: 0,
    speed: 0,
  });
  function calc() {
    //Compara os parametros
    var pokemonData = pokemon.data;
    var peso = (pokemonData.weight * 100) / maiorPeso;
    var altura = (pokemonData.height * 100) / maiorAltura;
    var hp = pokemonData.stats[0].base_stat;
    var attack = pokemonData.stats[1].base_stat;
    var defense = pokemonData.stats[2].base_stat;
    var specialAttack = pokemonData.stats[3].base_stat;
    var specialDefense = pokemonData.stats[4].base_stat;
    var speed = pokemonData.stats[5].base_stat;

    setValues({
      peso,
      altura,
      hp,
      attack,
      defense,
      specialAttack,
      specialDefense,
      speed,
    });
    var obj = Object.entries(values);
    // setObjPokemon(obj);
    console.log(Object.entries(values));
  }

  useEffect(() => {
    calc();
  }, [pokemon]);

  return (
    <>
      <StatsContent>
        <Row>
          {Object.entries(values).map((item) => (
            <Col xs={6}>
              <Stat stat={item[1]}>
                <TitleStat>
                  <p>{item[0]}</p>
                </TitleStat>
                <Statistics stat={item[1]} />
              </Stat>
            </Col>
          ))}
        </Row>
      </StatsContent>
    </>
  );
};

export default Stats;
