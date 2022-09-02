//! Sebastian

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LandingImg, MainContainer } from '../../Styles/StylesSebastian';

function LandingPage() {

  const navigation = useNavigate();

  setTimeout(() => navigation('/home'), 3000);

  return (

    <MainContainer>

      <LandingImg src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662134335/Demoday/logo_vlilbq.png" alt="Logo de Marca" />

    </MainContainer>

  )

}


export default LandingPage;
