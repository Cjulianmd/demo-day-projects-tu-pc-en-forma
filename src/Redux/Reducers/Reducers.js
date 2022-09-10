//! No modificar aún


let defaultUser = {
  name: '',
  email: '',
  apellidos: '',
  phone: '',
  id: '',
  isLogged: false,
  admin: false,
  avatar: ''
}

let defaultVideos = {
  preventivo: '',
  correctivo: '',
  software: ''
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

const videosReducer = (state = defaultVideos, action) => {
  switch (action.type) {
    case '@video/get':
      return action.payload;
    default:
      return state;
  }
}


export { logInReducer, videosReducer };
