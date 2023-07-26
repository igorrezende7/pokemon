import NavBar from "../components/NavBar/NavBar"
import { Shadow } from "./styled"
import {useSelector} from 'react-redux'

const DadosScreen = () =>{
    const {allPokemons} = useSelector((root:any)=> root.pokemonsReducer)
    console.log("AllPokemons: ",allPokemons)
    return(
        <>
        <NavBar></NavBar>
        <Shadow></Shadow>
        </>
    )
}

export default DadosScreen