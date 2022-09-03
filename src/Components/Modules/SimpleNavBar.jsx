

import React from 'react';
import { MainContainer } from '../../Styles/StylesSebastian';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function SimpleNavBar() {

  return (

    <MainContainer>

      <Navbar bg="dark" variant="dark">

        <Container>

          <Navbar.Brand href="#home">

            <img
              alt="Logo de Marca"
              src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662134335/Demoday/logo_vlilbq.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}

            Tu PC en Forma

          </Navbar.Brand>

        </Container>

      </Navbar>

    </MainContainer>

  )

}

export default SimpleNavBar;
