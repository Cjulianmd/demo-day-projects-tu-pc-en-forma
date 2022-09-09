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
  useMergeRefs,

} from '@chakra-ui/react'
import { toast } from 'react-toastify';
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from 'firebase/auth';
import * as React from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'
import { useForm } from '../../../Hooks/useForm';
import { getAuth } from "firebase/auth";
import { db } from '../../../Utils/JulianFirebase';
import { useNavigate } from 'react-router-dom';

export const Inputsigin = React.forwardRef((props, ref) => {
  const { isOpen, onToggle } = useDisclosure()
  const inputRef = React.useRef(null)
  const mergeRef = useMergeRefs(inputRef, ref)
  const [formValues, handleInputChange, reset] = useForm({
    name: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
  })

  const navigation = useNavigate();

  const onClickReveal = () => {

    onToggle()

    if (inputRef.current) {
      inputRef.current.focus({
        preventScroll: true,

      })
    }
  }
  const auth = getAuth();
  const onClicksumit = () => {
    createUserWithEmailAndPassword(auth, formValues.email, formValues.password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: formValues.name,
          phoneNumber: formValues.phone
        }

        )
          .then(() => {
            sendEmailVerification(auth.currentUser)
              .then(() => {
                toast.success('Correo de verificación enviado.')
                setDoc(doc(db, 'Clientes', auth.currentUser.uid), {
                  apellidos: formValues.lastName,
                  phone: formValues.phone,
                  email: formValues.email,
                  admin: false
                })
                  .then(() => {
                    toast.success('Registro exitoso.');
                    navigation("/login");
                  })
                reset()
              })
          })
      })
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        reset()
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        toast.error('Algo ha fallado. Contacata al administrador.')
        // ..
      });
  }


  return (
    <>
      <form >
        <FormControl>
          <FormLabel color='white' htmlFor="email">Correo</FormLabel>
          <Input color='white' onChange={handleInputChange} value={formValues.email} id="email" name="email" type="email" />
        </FormControl>
        <FormControl>
          <FormLabel color='white' htmlFor="phone">Teléfono</FormLabel>
          <Input color='white' onChange={handleInputChange} value={formValues.phone} id="phone" name="phone" type="number" />
        </FormControl>
        <FormControl>
          <FormLabel color='white' htmlFor="name">Nombres</FormLabel>
          <Input color='white' onChange={handleInputChange} value={formValues.name} id="name" name="name" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel color='white' htmlFor="lastName">Apellidos</FormLabel>
          <Input color='white' onChange={handleInputChange} value={formValues.lastName} id="lastName" name="lastName" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel color='white' htmlFor="password">Constraseña</FormLabel>
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
        </FormControl>
        <br />
        
        <Stack spacing="6">
          <br />
          <Button onClick={onClicksumit} color='mute'>Registrar</Button>
        </Stack >
      </form>
      
    </>
  )
})
