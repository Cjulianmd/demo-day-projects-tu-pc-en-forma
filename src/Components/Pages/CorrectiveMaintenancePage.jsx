//! Julián
import {
  Button,
  Input,
} from '@chakra-ui/react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../FireBase/JulianFirebase'
import { useForm } from './../../Hooks/useForm';
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord} from 'react-icons/bs';
import React from 'react';

function CorrectiveMaintenancePage() {
  const [formValues, handleInputChange, reset] = useForm({
    name: '',
    apellido: '',
    información_de_contacto: '',
    description: '',
    Direccion: '',
    cedula: '',
  })

  const agendar = () => {
    return () => {

      addDoc(collection(db, "agenda_arreglo"), formValues)
      console.log(formValues)
      reset()

    }
  }
  return (
    <>
      <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>
          <Box
            bg="#02054B"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      aqui puedes agendar cita para el mantenimiento 
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                          +91-988888888
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                          hello@abc.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                          Karnavati, India
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start">
                      <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<MdFacebook size="28px" />}
                      />
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsGithub size="28px" />}
                      />
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsDiscord size="28px" />}
                      />
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>nombre</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                          <Input placeholder='nombre' onChange={handleInputChange} value={formValues.name} id="name" name="name" type="text" />
                          </InputGroup>
                        </FormControl> 
                         <FormControl id="name">
                          <FormLabel>apellido</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />
                            }
                            />
                          <Input placeholder='apellido' onChange={handleInputChange} value={formValues.apellido} id="apellido" name="apellido" type="text" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>información de contacto</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                          <Input placeholder='información de contacto' onChange={handleInputChange} value={formValues.información_de_contacto} id="información_de_contacto" name="información_de_contacto" type="text" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Direccion</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                          <Input placeholder='Direccion' onChange={handleInputChange} value={formValues.Direccion} id="Direccion" name="Direccion" type="text" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Cedula</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input placeholder='cedula' onChange={handleInputChange} value={formValues.cedula} id="cedula" name="cedula" type="number" />
                          </InputGroup>
                        </FormControl>

                        <FormControl id="name">
                          <FormLabel>Descripcion</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="Descripcion"
                            onChange={handleInputChange}
                             value={formValues.description} 
                             id="description" 
                             name="description" 
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            onClick={agendar()}
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{}}>
                            Send
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  )

}

export default CorrectiveMaintenancePage;