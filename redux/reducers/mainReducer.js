import { combineReducers } from "redux";
import experienciasReducer from "./experienciasReducer";
import packsReducer from "./packsReducer";
import usuariosReducer from "./usuariosReducer";


const mainReducer = combineReducers({
  experienciasReducer, packsReducer, usuariosReducer
})

export default mainReducer