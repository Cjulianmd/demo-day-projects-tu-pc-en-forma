//! No modificar aún


import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logInReducer, videosReducer } from '../Reducers/Reducers';


let Store;

if (process.env.NODE_ENV !== 'production') {

  const r = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  Store = createStore(
    combineReducers(
      {
        userLogIn: logInReducer,
        ManVideos: videosReducer
      }
    ), r(applyMiddleware())
  )

} else {
  
  Store = createStore(
    combineReducers(
      {
        userLogIn: logInReducer,
        ManVideos: videosReducer
      }
    )
  )
  
}


export default Store;
