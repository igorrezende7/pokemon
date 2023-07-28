import dadosActionTypes from "./dadosActionTypes";

const initialState = {
    dados:null,
  maisForte:null,
  maisRapido:null,
  maisVida:null
}

const dadosReducer = (state =initialState, action:any)=>{
    var response = action.payload;
    switch(action.type){
        case dadosActionTypes.add:
          return {...state, dados:response.accumulator, maisForte:response.maisForte, maisRapido:response.maisRapido, maisVida:response.maisVida}
      }
      return {...state}
}

export default dadosReducer