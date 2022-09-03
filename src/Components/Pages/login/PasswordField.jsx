import {
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  useDisclosure,
  useMergeRefs

} from '@chakra-ui/react'
import * as React from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'
import { useForm } from '../../../Hooks/useForm';
import { getAuth } from "firebase/auth";
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { actionLogIn } from '../../../Redux/Actions/Actions';
import { doc, getDoc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { db } from '../../../FireBase/JulianFirebase';


export const PasswordField = React.forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { isOpen, onToggle } = useDisclosure()
  const inputRef = React.useRef(null)
  const mergeRef = useMergeRefs(inputRef, ref)
  const [formValues, handleInputChange, reset] = useForm({
    email: '',
    password: '',
  })
  const onClicksumit = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, formValues.email, formValues.password)
    .then((userCredential) => {
       if (!userCredential.user.emailVerified) {
      alert('Your account has not been verified. Please verify your account before attempting to LogIn.')
    } else {
      getDoc(doc(db, 'Clientes', auth.currentUser.uid))
        .then(doc => {
          if (doc.exists) {
            let userData = doc.data();
            let logInaction = Object.assign({}, actionLogIn);
            logInaction.payload = {
            email: formValues.email,
            apellidos: userData.apellidos,
            phone: userData.phone, 
            isLogged: true };
            dispatch(logInaction);
            navigation("/home");
          } else {
            toast.error('Please call the admin because your LogIn has an error.')
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode)
          const errorMessage = error.message;
          console.log(errorMessage)
          alert('email o contraseña incorrectos')
        });
    }
    })
  }
  const onClickReveal = () => {

    onToggle()

    if (inputRef.current) {
      inputRef.current.focus({
        preventScroll: true,

      })
    }
  }

  return (
    < >
      <form >
        <FormControl>
          <FormLabel color='white' htmlFor="email">Email</FormLabel>
          <Input color='white' onChange={handleInputChange} value={formValues.email} id="email" name="email" type="email" />
        </FormControl>
        <FormControl>
          <FormLabel color='white' htmlFor="password">Password</FormLabel>
          <InputGroup>
            <InputRightElement>
              <IconButton
                variant="link"
                aria-label={isOpen ? 'Mask password' : 'Reveal password'}
                icon={isOpen ? <HiEyeOff /> : <HiEye />}
                onClick={onClickReveal}
              />
            </InputRightElement>
            <Input
              color='white'
              onChange={handleInputChange}
              value={formValues.password}
              id="password"
              ref={mergeRef}
              name="password"
              type={isOpen ? 'text' : 'password'}
              autoComplete="current-password"
              required
              {...props}
            />

          </InputGroup>
          <br />
          <Stack spacing="6">
            <Button onClick={onClicksumit} color='mute' >Inicia Sesion</Button>
          </Stack>
        </FormControl>
      </form>
    </>
  )
})
PasswordField.displayName = 'PasswordField'