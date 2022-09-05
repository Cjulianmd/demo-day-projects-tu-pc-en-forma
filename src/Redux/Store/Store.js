//! No modificar aún


import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logInReducer, videosReducer } from '../Reducers/Reducers';


let Store;

const r = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose  //*Important Eliminar previo a realizar el deploy

Store = createStore(
  combineReducers(
    {
      userLogIn: logInReducer,
      ManVideos: videosReducer
    }
  ), r(applyMiddleware())
)


export default Store;
