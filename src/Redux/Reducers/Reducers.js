//! No modificar aún


let defaultUser = {
  email: '',
  name: '',
  faculty: '',
  isLogged: true
}



const logInReducer = (state = defaultUser, action) => {

  switch (action.type) {
    case '@user/LogIn':
      return action.payload;
    case '@user/LogOut':
      return defaultUser;
    default:
      return state;
  }
}


export { logInReducer };
