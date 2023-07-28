import {createStore} from 'redux'
import rootReducer from './rootReducer'
import persistConfig from './persist'
import {persistReducer, persistStore} from 'redux-persist'
import dadosReducer from './Dados/reducer'


const persisteReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persisteReducer)
const persistor = persistStore(store)

export  {store, persistor}
