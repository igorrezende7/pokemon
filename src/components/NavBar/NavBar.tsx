import { ImgNav, Nav } from "../../styled/navBar";
import pokemon from "../../images/pokemon.png";
import bolaPokemon from "../../images/bola-pokemon.png";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const { pokemons } = useSelector((root: any) => root.pokemonsReducer);
  return (
    <>
      <Nav>
        <div>
          <ImgNav
            onClick={() => navigate("/")}
            className="img-fluid"
            src={pokemon}
          ></ImgNav>
        </div>

        <div>
          <Stack spacing={2} sx={{ width: 300 }}>
            <Autocomplete
              id="Pokemons"
              freeSolo
              options={pokemons.map((option: any) => option.data.name)}
              renderInput={(params: any) => (
                <TextField {...params} label="Pokemons" />
              )}
            />
          </Stack>
        </div>
      </Nav>
    </>
  );
};

export default NavBar;
