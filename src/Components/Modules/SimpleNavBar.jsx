

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LandingImg, MainContainer } from '../../Styles/StylesSebastian';

function SimpleNavBar() {

  const navigation = useNavigate();

  return (

    <MainContainer>

      <nav className="navbar navbar-light nabvar-background fixed-top">

        <div className="container-fluid">

          <a style={{ color: '#ffffff' }} className="navbar-brand hyperlink" onClick={() => navigation("/landing")}>
            <LandingImg src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662134335/Demoday/logo_vlilbq.png" />
            <small>Tu PC en Forma</small>
          </a>

          <span className="navbar-text">
            <ul style={{ gap: '2rem' }} className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item hyperlink"><h6 style={{ color: '#ffffff' }} aria-current="page" onClick={() => navigation("/landing")}>Atrás</h6></li>
            </ul>
          </span>

        </div>

      </nav>

    </MainContainer>

  )

}

export default SimpleNavBar;
