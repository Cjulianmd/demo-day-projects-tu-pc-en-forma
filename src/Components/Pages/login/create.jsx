import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from '../../Modules/Footer'
import SimpleNavBar from '../../Modules/SimpleNavBar'
import { Inputsigin } from './Input'
import { OAuthButtonGroup } from './OAuthButtonGroup'

export const Create = () => (
    <Container
    style={{ backgroundColor: '#9f90ea', padding: '1rem', borderRadius: '5%' }}
      maxW="lg"
      py={{
        base: '12',
        md: '24',
      }}
      px={{
        base: '0',
        sm: '8',
      }}
    >
          <Stack
            spacing={{
              base: '2',
              md: '3',
            }}
            textAlign="center"
          >
            <Heading
              size={useBreakpointValue({
                base: 'xs',
                md: 'sm',
              })}
              color='white'
            >
              Regístrate
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color='white'>¿Estás registrado?</Text>
              <NavLink to="/login">
                <Button variant="link" colorScheme="blue">
                  Inicia sesión
                </Button>
              </NavLink>
            </HStack>
          </Stack>
        <Box
        style={{ backgroundColor: '#9f90ea', padding: '0rem', borderRadius: '5%' }}
        py={{
          base: '0',
          sm: '8',
        }}
        px={{
          base: '4',
          sm: '10',
        }}
        bg={useBreakpointValue({
          base: 'transparent',
          sm: 'bg-surface',
        })}
        borderRadius={{
          base: 'none',
          sm: 'xl',
        }}
         >
          <Inputsigin />
        </Box>
    </Container>
)

export default Create;
