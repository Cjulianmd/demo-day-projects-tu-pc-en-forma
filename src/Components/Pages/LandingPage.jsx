//! Sebastian

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LandingContainer, LandingImg, MainContainer } from '../../Styles/StylesSebastian';
import Footer from '../Modules/Footer';
import UnloggedNavBar from '../Modules/UnloggedNavBar';

function LandingPage() {

  // const navigation = useNavigate();


  return (

    <MainContainer>

      <UnloggedNavBar />

      <div>Hola</div>

      <Footer />
      
    </MainContainer>

  )

}


export default LandingPage;
