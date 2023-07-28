import { useEffect, useState } from "react";
import CardPokemons from "../components/CardPokemons/CardPokemons";
import ModalPokemons from "../components/ModalPokemons/ModalPokemons";
import NavBar from "../components/NavBar/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { Shadow } from "./styled";
import { Pagination, Stack } from "@mui/material";
const url = process.env.REACT_APP_URL_API;

const HomeScreen = () => {
  const { pokemons } = useSelector((root: any) => root.pokemonsReducer);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [pokemonFiltrado, setPokemonFiltrado] = useState<any>()
  const [itensPerPage, setItensPerPage] = useState<number>(6)
  const [pagina, setPagina] = useState<number>(0);
  const pages = Math.ceil(pokemons.length/itensPerPage);
  const start = pagina * itensPerPage;
  const end = start + itensPerPage;
  const pokemon = pokemons.slice(start, end)



  function getPokemon(id: any) {
    var id: any = parseInt(id);
    var pokemonFiltrado = pokemons.filter((x: any) => x.data.id === id);
    setPokemonFiltrado(pokemonFiltrado[0]);
  }

  function changeModal() {
    setModalOpen(!modalOpen);
    console.log(modalOpen);
  }

  return (
    <>
      <NavBar></NavBar>
      <Shadow>
        <CardPokemons
          changeModal={changeModal}
          pokemons={pokemon}
          getPokemon={getPokemon}
        ></CardPokemons>
        <ModalPokemons
          open={modalOpen}
          changeModal={changeModal}
          pokemon={pokemonFiltrado}
        ></ModalPokemons>

        <Row className="justify-content-center">
            <Col xs={12} className="mb-5 w-100">
                  <Stack className="pt-5" spacing={2}>
                    <Pagination
                    className="mx-auto"
                      page={pagina + 1}
                      count={pages}
                      onChange={(e, currentPage) => {
                        setPagina(Number(currentPage-1))
                        window.scrollTo({
                          top:0,
                          behavior:'smooth'
                        })
                      }}
                      color="primary"
                    />
                  </Stack>
                </Col>
            </Row>
      </Shadow>
    </>
  );
};

export default HomeScreen;
