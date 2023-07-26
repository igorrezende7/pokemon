import PokemonsActionTypes from "./pokemonsActionType"

const initalState = {
  pokemons: null,
  count:null,
  allPokemons:null,
  tipos:null,
  maiorPeso:null,
  maiorAltura:null,
  maisForte:null,
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

  switch(action.type){
    case PokemonsActionTypes.addFiltros:
      return {...state, tipos:response.tipos, maiorPeso:response.maiorPeso, maiorAltura:response.maiorAltura, maisForte:response.maisForte}
  }
  return {...state}
}

export default pokemonsReducer
