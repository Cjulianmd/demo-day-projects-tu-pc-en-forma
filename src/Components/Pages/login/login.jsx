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
} from '@chakra-ui/react'
import * as React from 'react'
import { NavLink } from 'react-router-dom';
import { PasswordField } from './PasswordField'
import { OAuthButtonGroup } from './OAuthButtonGroup';

export const LogIn = () => (

  <div >
    <Container
      maxW="lg"
      py={{
        base: '12',
        md: '24',
      }}
      px={{
        base: '0',
        sm: '0',
      }}
    >

        <Box
        style={{ backgroundColor: '#9f90ea', padding: '1rem', borderRadius: '5%' }}
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
              Inicia sesión
            </Heading>
            <NavLink to="/signin">
              <HStack spacing="1" justify="center">
                <Text color='white'>¿No te has registrado?</Text>
                <Button variant="link" colorScheme="blue">
                  Hazlo aquí
                </Button>

              </HStack> </NavLink>
          </Stack>
        </Stack>
          <Stack style={{ backgroundColor: '#9f90ea', padding: '1rem', borderRadius: '5%' }} spacing="10">
              <PasswordField />
              <HStack>
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color='white'>
                  o hazlo con:
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
          </Stack>
        </Box>
    </Container>
  </div>
)

export default LogIn;
