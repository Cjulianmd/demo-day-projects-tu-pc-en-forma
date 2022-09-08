import { Button, ButtonGroup, VisuallyHidden } from '@chakra-ui/react'
import { GoogleIcon } from './ProviderIcons'
import { getAuth, signInWithPopup , GoogleAuthProvider, FacebookAuthProvider} from "firebase/auth";


import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionLogIn } from '../../../Redux/Actions/Actions';
import { toast } from 'react-toastify';
import { face, google } from '../../../Utils/JulianFirebase';
// import { useNavigate } from 'react-router-dom';

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
    const onClickFace = () => {
      
          signInWithPopup(auth, face)
          .then((result) => {
            // The signed-in user info.
            const user = result.user;

            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;
            console.log(accessToken)
            console.log(user);
            let userData = user;
            let logInaction = Object.assign({}, actionLogIn);
            logInaction.payload = {
            id: auth.currentUser.uid,
            email: userData.email,
            apellidos: userData.apellidos,
            phone: userData.phoneNumber, 
            isLogged: true };
            dispatch(logInaction);
            toast.success('Bienvenido.')
            navigation("/home");
            // navigation("/home");


            // ...
          })
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            console.log(errorCode)
            const errorMessage = error.message;
            console.log(errorMessage)
            // The email of the user's account used.
            const email = error.customData.email;
            console.log(email)
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(error);
            console.log(credential)
            const user = error.customData;
            console.log(user);

        // ...
      });

        }
    const onClickGogle = () => {
      signInWithPopup(auth, google)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        console.log(accessToken)
        console.log(user);
        let userData = user;
        let logInaction = Object.assign({}, actionLogIn);
        logInaction.payload = {
        id: auth.currentUser.uid,
        email: userData.email,
        apellidos: userData.apellidos,
        phone: userData.phoneNumber, 
        isLogged: true };
        dispatch(logInaction);
        toast.success('Bienvenido.')
        navigation("/home");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode)
        const errorMessage = error.message;
        console.log(errorMessage)
        // The email of the user's account used.
        const email = error.customData.email;
        console.log(email)
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        console.log(credential)
        const user = error.customData;
        console.log(user);

    // ...
  });
    }
 return(
  <ButtonGroup variant="outline" spacing="4" width="full">
    <Button onClick={onClickGogle} key={providers[0].name} width="full">
        <VisuallyHidden>Sign in with {providers[0].name}</VisuallyHidden>
        {providers[0].icon}
      </Button>
    <Button color='white' onClick={onClickFace} key={providers[1].name} width="full">
        <VisuallyHidden>Sign in with {providers[1].name}</VisuallyHidden>
        f
    </Button>
  </ButtonGroup>
) 

}
