import {combineReducers} from 'redux';
import pokemonsReducer from './pokemons/reducer';
import dadosReducer from './Dados/reducer';
const rootReducer = combineReducers({
  pokemonsReducer,
  dadosReducer
});

export default rootReducer
