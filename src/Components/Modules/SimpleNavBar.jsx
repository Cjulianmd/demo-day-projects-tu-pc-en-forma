

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LandingImg, MainContainer } from '../../Styles/StylesSebastian';

function SimpleNavBar() {

  const navigation = useNavigate();

  return (

    <MainContainer>

      <nav className="navbar navbar-light bg-light">

        <div className="container-fluid">

          <a className="navbar-brand hyperlink" onClick={() => navigation("/landing")}>
            <LandingImg src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662134335/Demoday/logo_vlilbq.png" />
            <small>Tu PC en Forma</small>
          </a>

        </div>

      </nav>

    </MainContainer>

  )

}

export default SimpleNavBar;
