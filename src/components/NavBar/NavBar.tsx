import { ButtonNav, ImgNav, Nav } from "../../styled/navBar";
import pokemonImg from '../../images/pokemon.png'
import bolaPokemon from "../../images/bola-pokemon.png";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ModalPokemons from "../ModalPokemons/ModalPokemons";
import Skeleton from "../Skeleton/Skeleton";
import axios from "axios";
const url = process.env.REACT_APP_URL_API

const NavBar = () => {
  const {count} = useSelector((root:any)=> root.pokemonsReducer)
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [pokemon, setPokemon] = useState<any>("");
  const [pokemons, setPokemons] = useState<any>(false)
  const [skeleton, setSkeleton] = useState<boolean>(false)

  useEffect(()=>{
    GetAllPokemons().then((res)=>{
      console.log(res.data)
      setPokemons(res.data.results)
    })
  },[])

  async function GetAllPokemons(){
    let response = await axios.get(`${url}/pokemon/?limit=${count}`)
    let data = response.data
    return response
  }


  function changeModal() {
    setModalOpen(!modalOpen);
    console.log(modalOpen);
  }

  async function changePokemon(name:string){
    setSkeleton(true)
    if(name == undefined){
      setSkeleton(false)
      return false
    }
   
    var newPokemon = await axios.get(`${url}/pokemon/${name}`)
    .then((res)=>{
      console.log(res)
      setPokemon(res)
      setSkeleton(false)
      setModalOpen(true)
    })
   
  }
  return (
    <>
      { pokemons ? 
        <>
        <Skeleton open={skeleton}/>
         <ModalPokemons
         open={modalOpen}
         changeModal={changeModal}
         pokemon={pokemon}
       ></ModalPokemons>
    <Nav>
      <ImgNav
        onClick={() => navigate("/")}
        src={pokemonImg}
      ></ImgNav>
    
 

    
      <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
          id="Pokemons"
          freeSolo
          onChange={(e:any, newValue:any)=>{
            changePokemon(newValue)
          }}
          options={pokemons.map((option: any) => option.name)}
          renderInput={(params: any) => (
            <TextField {...params} label="Pokemons" />
          )}
        />
      </Stack>
    
  
      <ButtonNav onClick={()=> navigate('/dados')}>Dados</ButtonNav>
   
  </Nav>
        </>
  :
  <Skeleton open={true}/> 
    }
    </>
  );
};

export default NavBar;
