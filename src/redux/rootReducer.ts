import {combineReducers} from 'redux';
import pokemonsReducer from './pokemons/reducer';

const rootReducer = combineReducers({
  pokemonsReducer
});

export default rootReducer
