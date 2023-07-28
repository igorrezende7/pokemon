import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardButton,
  CardImage,
  CardOverAll,
  CardTitle,
} from "../../styled/cards";

interface PokemonProps {
  pokemons: any;
  changeModal: any;
  getPokemon: any;
}
const CardPokemons = ({ pokemons, changeModal, getPokemon }: PokemonProps) => {
  const navigate = useNavigate();

  function handlePokemon(id: number) {
    changeModal();
    getPokemon(id);
  }

  return (
    <>
      <Container>
        <Row className="justify-content-md-start justify-content-center">
          {pokemons.map((pokemon: any, key: number) => (
            <Col lg={3} md={6} xs={10} className="d-flex">
              <Card hover={true}>
                <CardImage>
                  <CardOverAll>{pokemon.data.base_experience}</CardOverAll>
                  <img src={pokemon.data.sprites.front_default} alt="" />
                </CardImage>
                <CardTitle>
                  {pokemon.data.name.charAt(0).toUpperCase() +
                    pokemon.data.name.slice(1)}
                </CardTitle>
                <CardButton onClick={() => handlePokemon(pokemon.data.id)}>
                  Escolher
                </CardButton>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CardPokemons;
