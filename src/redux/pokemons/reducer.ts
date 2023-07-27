import PokemonsActionTypes from "./pokemonsActionType"

const initalState = {
  pokemons: null,
  count:null,
  allPokemons:null,
}

const pokemonsReducer = (state = initalState, action:any)=>{
  var response = action.payload;
  switch(action.type){
    case PokemonsActionTypes.add:
      return {...state, pokemons:response.resposta, count:response.count}
  }

  switch(action.type){
    case PokemonsActionTypes.addAll:
      return {...state, allPokemons:response}
  }

  return {...state}
}

export default pokemonsReducer
