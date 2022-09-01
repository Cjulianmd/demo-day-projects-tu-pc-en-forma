//! Julián
import {
  Container,
  Button,
  Stack,
  Image,
} from '@chakra-ui/react';
import { LinkBox, LinkOverlay, Text, Heading,Box } from '@chakra-ui/react'
import React from 'react';
function SoftwareUpdatePage() {
  //document.body.style.backgroundColor = '#675cb0';
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
             Software update <br />
            <Text as={'span'} color='#2f2c79'>
            Features and Capabilities
            </Text>
          </Heading>
          <Text color={'gray.500'}>
          Automated software deployment is the auto-distribution of all packages in a working environment without zero to minimal manual intervention. Distributing software to all machines in a network can be a daunting task for IT Administrators, especially at large enterprises. 
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'#2f2c79'}
              bg={'#2f2c79'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: '#9f90ea',
              }}>
              Get Started
            </Button>
            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Container>
      <LinkBox maxW='1400px' p='5'>
        <LinkBox backgroundColor = '#afcdea' as='article' maxW='700px' p='5' borderWidth='1px' >
          <Heading size='md'  my='2'>
            <LinkOverlay color='#2f2c79' href='#'>
            Obtener la actualización más reciente de Windows
            </LinkOverlay>
          </Heading>
          <Text>
          Las características de Windows 11 se agregan y actualizan constantemente, y todas ellas (incluidas las actualizaciones principales)<br/> se entregan a tu dispositivo desde la página de Windows Update de Configuración.<br/> Windows te avisará si tienes que reiniciar el dispositivo para completar una actualización y, si es así, puedes elegir <br/>la hora que mejor te convenga para completar la actualización. Además, ten en cuenta lo siguiente:<br/>

          Para buscar actualizaciones, selecciona Inicio Configuración Windows Update y luego selecciona Buscar actualizaciones. Si hay actualizaciones disponibles, puedes instalarlas.<br/>
          <br/>
          -Si tienes problemas con la actualización del dispositivo, incluidos problemas con actualizaciones principales anteriores, consulta las correcciones habituales en Solucionar problemas de actualización de Windows o usa Solucionar Windows problemas de actualización para guiarte por el proceso de solución de problemas.<br/>
          <br/>
          -Si Windows Update te advierte de que no tienes suficiente espacio en el dispositivo para instalar actualizaciones, consulta Liberar espacio para las actualizaciones de Windows.<br/>
          <br/>
          -Si tienes problemas de conexión a Internet durante la actualización del dispositivo, consulta Solucionar Wi-Fi problemas de conexión en Windows.<br/>
          </Text>
      </LinkBox>
      <Box position='absolute' left='60%' top='5%' boxSize='sm'>
        <Image boxSize='550px' width='400px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2j-4nrACwh3ZppkhZbLMWVep-vLZxQWxDrg&usqp=CAU' alt='Dan Abramov' />
      </Box>
    </LinkBox>
    <br/>
    <LinkBox backgroundColor = '#afcdea' left='20%' as='article' maxW='700px' p='5' borderWidth='1px' >
      <Heading size='md'  my='2'>
        <LinkOverlay color='#2f2c79' href='#'>
        Linux: Actualizar paquetes a su última versión
        </LinkOverlay>
      </Heading>
      <Text>
      Actualizar Linux a su última versión disponible implica a veces reinstalar la distribución que estés utilizando o hacerlo de forma gráfica. Sin embargo, puedes tener tu ordenador a punto con sólo actualizar los paquetes de Linux a su versión más reciente. Esto actualiza las aplicaciones y software que estén disponible oficialmente en los repositorios.
      No tienes por qué ir actualizando todo el software de Linux individualmente. Con un sólo comando en la terminal, se actualizan automáticamente y sin problemas. Es un proceso rápido, aunque depende de cuánto tengas que actualizar. Te explicamos cómo lo puedes hacer.<br/>
      <br/>
      -Abre la Terminal (Control + Alt + T)<br/>
      <br/>
      -Teclea (sin comillas) "sudo apt-get update" y pulsa enter<br/>
      <br/>
      -Si tienes problemas de conexión a Internet durante la actualización del dispositivo, consulta Solucionar Wi-Fi problemas de conexión en Windows.<br/>
      </Text>
    </LinkBox>
    <br/>
    <LinkBox maxW='1400px' p='5'>
      <LinkBox backgroundColor = '#afcdea' left='48%' as='article' maxW='700px' p='5' borderWidth='1px' >
        <Heading size='md'  my='2'>
          <LinkOverlay color='#2f2c79' href='#'>
          Obtener la actualización más reciente de Windows
          </LinkOverlay>
        </Heading>
        <Text>
        Periódicamente, Apple publica actualizaciones del software de macOS, que pueden incluir actualizaciones para apps que vienen con tu Mac, así como actualizaciones de seguridad importantes.<br/>
        <br/>
        Si recibes una notificación que indica que hay actualizaciones de software disponibles, puedes elegir entre instalarlas o si quieres que se te recuerde al día siguiente. También puedes buscar actualizaciones de macOS manualmente en el panel "Actualización de software" de Preferencias del Sistema.
        <br/>
        <br/>
        En tu Mac, selecciona menú Apple Preferencias del Sistema y haz clic en “Actualización de software” .<br/>
        <br/>
        Para instalar las actualizaciones de macOS automáticamente, selecciona “Actualizar mi Mac automáticamente”.<br/>
        <br/>
        Para establecer opciones de actualización avanzadas, haz clic en Avanzado y realiza cualquiera de las siguientes acciones:<br/>
        -Para que la Mac busque actualizaciones automáticamente, selecciona “Buscar actualizaciones”.
        <br/>
        -Para que tu Mac descargue actualizaciones sin preguntar, selecciona “Descargar nuevas actualizaciones cuando estén disponibles”.
        <br/>
        -Para que la Mac instale las actualizaciones de macOS automáticamente, selecciona “Instalar actualizaciones de macOS”.
        <br/>
        -Para que tu Mac instale actualizaciones de apps de App Store automáticamente, selecciona “Instalar las actualizaciones de apps de App Store”.
        <br/>
        -Para que la Mac instale los archivos del sistema y las actualizaciones de seguridad automáticamente, selecciona “Instalar archivos de datos del sistema y actualizaciones de seguridad”.
        </Text>
      </LinkBox>
      <Box position='absolute' left='10%' top='20%' boxSize='sm'>
        <Image left='70%' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
      </Box>
    </LinkBox>
    </>

  )

}

export default SoftwareUpdatePage;