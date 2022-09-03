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
import { NavLink } from 'react-router-dom';
import { PasswordField } from './PasswordField'
import { OAuthButtonGroup } from './OAuthButtonGroup';
import SimpleNavBar from '../../Modules/SimpleNavBar';
import Footer from '../../Modules/Footer';


export const LogIn = () => (

  <div style={{backgroundColor: '#ffffff'}}>
    <SimpleNavBar />

    <Container
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
      <Stack style={{ backgroundColor: '#675cb0', padding: '2rem', borderRadius: '5%' }} spacing="8">
        <Stack spacing="6">
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
              Inicia sesión con tu usuario registrado
            </Heading>
            <NavLink to="/signin">
              <HStack spacing="1" justify="center">
                <Text color='white'>¿No te has registrado?</Text>
                <Button variant="link" colorScheme="blue">
                  Regístrate
                </Button>

              </HStack> </NavLink>
          </Stack>
        </Stack>
        <Box
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
          boxShadow={{
            base: 'none',
            sm: useColorModeValue('md', 'md-dark'),
          }}
          borderRadius={{
            base: 'none',
            sm: 'xl',
          }}
        >
          <Stack style={{ backgroundColor: '#9f90ea', padding: '2rem', borderRadius: '5%' }} spacing="6">
            <Stack spacing="5">
              <PasswordField />
            </Stack>
            <Stack spacing="6">
              <HStack>
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color='white'>
                  o hazlo con:
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>

    <Footer />

  </div>
)

export default LogIn;
