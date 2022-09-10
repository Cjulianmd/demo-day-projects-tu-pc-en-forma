import { Button, ButtonGroup, VisuallyHidden } from '@chakra-ui/react'
import { GoogleIcon } from './ProviderIcons'
import { getAuth, signInWithPopup} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionLogIn } from '../../../Redux/Actions/Actions';
import { toast } from 'react-toastify';
import { db, face, google } from '../../../Utils/JulianFirebase';
import { doc, getDoc } from 'firebase/firestore';

const providers = [
  {
    name: 'Google',
    icon: <GoogleIcon boxSize="5" />,
  },
  {
    name: 'facebook',
    icon: 'f',
  },
]

export const OAuthButtonGroup = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const auth = getAuth();

  const checkLogIn = (user) => {
    if (!user.emailVerified) {
      toast.warm('Tu cuenta no ha sido verificada. Por favor, verifica tu correo antes de iniciar sesión.')
    } else {
      getDoc(doc(db, 'Clientes', auth.currentUser.uid))
        .then(doc => {
          if (doc.exists) {
            let userData = doc.data();
            let logInaction = Object.assign({}, actionLogIn);
            logInaction.payload = { name: user.displayName, email: user.email, isLogged: true, phone: userData.phone, avatar: user.photoURL };
            dispatch(logInaction);
            navigation("/user");
          } else {
            toast.error('Por favor, contacta al administrador del sitio. Ha ocurrido un error.')
          }
        })

    }
  }

  const checkLoginErr = (code) => {
    switch (code) {
      case "auth/user-not-found":
      case "auth/wrong-password":
        toast.warn("Correo o contraseña incorrectos.");
        break;
      case "auth/too-many-requests":
        toast.warn("El correo de verificación ha sido enviado muchas veces. Contacata al administrador.");
        break;
      default:
        break;
    }
  }


  const onClickFace = () => {

    signInWithPopup(auth, face)
      .then((result) => {

        checkLogIn(result.user);

        // The signed-in user info.
        // const user = result.user;

        // // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // const credential = FacebookAuthProvider.credentialFromResult(result);
        // const accessToken = credential.accessToken;
        // console.log(accessToken)
        // console.log(user);
        // let userData = user;
        // let logInaction = Object.assign({}, actionLogIn);
        // logInaction.payload = {
        //   name: auth.currentUser.displayName,
        //   id: auth.currentUser.uid,
        //   email: userData.email,
        //   apellidos: userData.apellidos,
        //   phone: userData.phoneNumber,
        //   isLogged: true
        // };
        // dispatch(logInaction);
        // toast.success('Bienvenido.')
        // navigation("/user");


        // ...
      })
      .catch((error) => {

        checkLoginErr(error.code);

        // // Handle Errors here.
        // const errorCode = error.code;
        // console.log(errorCode)
        // const errorMessage = error.message;
        // console.log(errorMessage)
        // // The email of the user's account used.
        // const email = error.customData.email;
        // console.log(email)
        // // The AuthCredential type that was used.
        // const credential = FacebookAuthProvider.credentialFromError(error);
        // console.log(credential)
        // const user = error.customData;
        // console.log(user);

        // ...
      });

  }
  const onClickGogle = () => {
    signInWithPopup(auth, google)
      .then((result) => {

        checkLogIn(result.user)

        // // The signed-in user info.
        // const user = result.user;
        // // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // const credential = FacebookAuthProvider.credentialFromResult(result);
        // const accessToken = credential.accessToken;
        // console.log(accessToken)
        // console.log(user);
        // let userData = user;
        // let logInaction = Object.assign({}, actionLogIn);
        // logInaction.payload = {
        //   name: auth.currentUser.displayName,
        //   id: auth.currentUser.uid,
        //   email: userData.email,
        //   apellidos: userData.apellidos,
        //   phone: userData.phoneNumber,
        //   isLogged: true
        // };
        // dispatch(logInaction);
        // toast.success('Bienvenido.')
        // navigation("/user");
      })
      .catch((error) => {

        checkLoginErr(error.code);

        // // Handle Errors here.
        // const errorCode = error.code;
        // console.log(errorCode)
        // const errorMessage = error.message;
        // console.log(errorMessage)
        // // The email of the user's account used.
        // const email = error.customData.email;
        // console.log(email)
        // // The AuthCredential type that was used.
        // const credential = FacebookAuthProvider.credentialFromError(error);
        // console.log(credential)
        // const user = error.customData;
        // console.log(user);

        // ...
      });
  }
  return (
    <ButtonGroup variant="outline" spacing="4" width="full">
      <Button onClick={onClickGogle} key={providers[0].name} width="full">
        <VisuallyHidden>Ingresa con: {providers[0].name}</VisuallyHidden>
        {providers[0].icon}
      </Button>
      <Button color='white' onClick={onClickFace} key={providers[1].name} width="full">
        <VisuallyHidden>Ingresa con: {providers[1].name}</VisuallyHidden>
        f
      </Button>
    </ButtonGroup>
  )

}
