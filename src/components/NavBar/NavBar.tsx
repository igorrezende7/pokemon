import { ButtonNav, ImgNav, Nav } from "../../styled/navBar";
import pokemonImg from "../../images/pokemon.png";
import bolaPokemon from "../../images/bola-pokemon.png";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { Col, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ModalPokemons from "../ModalPokemons/ModalPokemons";
import Skeleton from "../Skeleton/Skeleton";
import axios from "axios";
import PokemonsActionTypes from "../../redux/pokemons/pokemonsActionType";
const url = process.env.REACT_APP_URL_API;

const NavBar = () => {
  const dispatch = useDispatch();
  const { count, allPokemons } = useSelector(
    (root: any) => root.pokemonsReducer
  );
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [pokemon, setPokemon] = useState<any>("");
  const [pokemons, setPokemons] = useState<any>(false);
  const [skeleton, setSkeleton] = useState<boolean>(false);

  useEffect(() => {
    try {
      GetAllPokemons().then((res) => {
        setPokemons(res.data.results);
        setSkeleton(false);
      });
    } catch (error) {
      console.log(error);
      setSkeleton(false);
    }
  }, []);

  async function GetAllPokemons() {
    let response = await axios.get(`${url}/pokemon/?limit=${count}`);
    let data = response.data;
    console.log(data);
    dispatch({
      type: PokemonsActionTypes.addAll,
      payload: data,
    });
    filterData(data);
    return response;
  }

  async function filterData(data: any) {
    let urls = [];
    for (var i = 0; i < count; i++) {
      urls.push(data.results[i].url);
    }
    try {
      await axios.all(urls.map((url) => axios.get(url))).then((res: any) => {
        loopData(res);
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function loopData(data: any) {
    var maiorPeso = { valor: 0, nome: "" };
    var maiorAltura = { valor: 0, nome: "" };
    var maisForte = { valor: 0, nome: "" };
    var pokemons = data;
    var unicoArray = new Set();
    var tipos = tipoPokemon(data);

    for (var i = 0; i < count; i++) {
      // var tipo = pokemons[i].data.types[0].type.name;

      var peso = pokemons[i].data.weight;
      var altura = pokemons[i].data.height;
      var forte = pokemons[i].data.base_experience;
      var nome = pokemons[i].data.name;
      var resultado = data.reduce((acumulator: any, current: any) => {
        // console.log("Current: ", current);
      });

      if (peso > maiorPeso.valor) {
        maiorPeso.valor = peso;
        maiorPeso.nome = nome;
      }
      if (altura > maiorAltura.valor) {
        maiorAltura.valor = altura;
        maiorAltura.nome = nome;
      }
      if (forte > maisForte.valor) {
        maisForte.nome = nome;
        maisForte.valor = forte;
      }
    }
    dispatch({
      type: PokemonsActionTypes.addFiltros,
      payload: { maiorPeso, maiorAltura, tipos, maisForte },
    });
  }

  function tipoPokemon(data: any) {
    const resultado = data.reduce((accumulator: any, current: any) => {
      var tipo = current.data.types[0].type.name;
      const existe = accumulator.find((item: any) => item.tipo === tipo);
      if (existe) {
        existe.contador++;
      } else {
        accumulator.push({ tipo: tipo, contador: 1 });
      }
      return accumulator;
    }, []);
    return resultado;
  }

  function changeModal() {
    setModalOpen(!modalOpen);
    console.log(modalOpen);
  }

  async function changePokemon(name: string) {
    setSkeleton(true);
    if (name == undefined) {
      setSkeleton(false);
      return false;
    }

    var newPokemon = await axios.get(`${url}/pokemon/${name}`).then((res) => {
      console.log(res);
      setPokemon(res);
      setSkeleton(false);
      setModalOpen(true);
    });
  }
  return (
    <>
      {pokemons ? (
        <>
          <Skeleton open={skeleton} />
          <ModalPokemons
            open={modalOpen}
            changeModal={changeModal}
            pokemon={pokemon}
          ></ModalPokemons>
          <Nav>
            <ImgNav onClick={() => navigate("/")} src={pokemonImg}></ImgNav>

            <Stack spacing={2} sx={{ width: 300 }}>
              <Autocomplete
                id="Pokemons"
                freeSolo
                onChange={(e: any, newValue: any) => {
                  changePokemon(newValue);
                }}
                options={pokemons.map((option: any) => option.name)}
                renderInput={(params: any) => (
                  <TextField {...params} label="Pokemons" />
                )}
              />
            </Stack>

            <ButtonNav onClick={() => navigate("/dados")}>Dados</ButtonNav>
          </Nav>
        </>
      ) : (
        <Skeleton open={true} />
      )}
    </>
  );
};

export default NavBar;
