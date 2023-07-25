import PokemonsActionTypes from "./pokemonsActionType"

const initalState = {
  pokemons: null,
  pesoMedio:null,
  alturaMedia:null,
  maiorPeso:null,
  maiorAltura:null,
}

const pokemonsReducer = (state = initalState, action:any)=>{
  var response = action.payload;
  switch(action.type){
    case PokemonsActionTypes.add:
      return {...state, pokemons:response.resposta, pesoMedio:response.pesoMedio, alturaMedia: response.alturaMedia, maiorPeso:response.maiorPeso, maiorAltura:response.maiorAltura}
  }
  return state
}

export default pokemonsReducer
