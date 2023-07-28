import PokemonsActionTypes from "./pokemonsActionType"

const initalState = {
  pokemons: null,
  count:null,
  dados:null,
  maisForte:null,
  maisRapido:null,
  maisVida:null
}

const pokemonsReducer = (state = initalState, action:any)=>{
  var response = action.payload;
  switch(action.type){
    case PokemonsActionTypes.add:
      return {...state, pokemons:response.resposta, count:response.count}
  }

  switch(action.type){
    case PokemonsActionTypes.addAll:
      return {...state, dados:response.accumulator, maisForte:response.maisForte, maisRapido:response.maisRapido, maisVida:response.maisVida}
  }

  return {...state}
}

export default pokemonsReducer
