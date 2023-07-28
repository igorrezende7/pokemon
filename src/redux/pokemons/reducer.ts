import PokemonsActionTypes from "./pokemonsActionType"

const initalState = {
  pokemons: null,
  count:null,
  
}

const pokemonsReducer = (state = initalState, action:any)=>{
  var response = action.payload;
  switch(action.type){
    case PokemonsActionTypes.add:
      return {...state, pokemons:response.resposta, count:response.count}
  }

  return {...state}
}

export default pokemonsReducer
