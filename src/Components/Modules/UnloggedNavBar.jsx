

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LandingImg, MainContainer } from '../../Styles/StylesSebastian';
import { IoMdMenu } from 'react-icons/io';

function UnloggedNavBar() {

  const navigation = useNavigate();

  return (

    <MainContainer>

      <nav className="navbar fixed-top navbar-expand-lg navbar-light nabvar-background">

        <div className="container-fluid">
          <LandingImg onClick={() => navigation("/landing")} className="hyperlink" src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662134335/Demoday/logo_vlilbq.png" />
          <a href="#" style={{ color: '#ffffff' }} className="navbar-brand hyperlink" onClick={() => navigation("/landing")}>Tu PC en Forma</a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <IoMdMenu />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">

            <ul style={{ marginLeft: '3rem' }} className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="#" style={{ color: '#ffffff' }} className="nav-link active hyperlink2" aria-current="page" onClick={() => navigation("/landing")}>Inicio</a>
              </li>

            </ul>

            <span style={{marginRight: '3rem'}} className="navbar-text">
              <ul style={{ gap: '2rem', marginRight: '2rem' }} className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item hyperlink"><h6 style={{ color: '#ffffff' }} aria-current="page" onClick={() => navigation("/login")}>Comienza</h6></li>
                <li className="nav-item hyperlink"><h6 style={{ color: '#ffffff' }} aria-current="page" onClick={() => navigation("/signin")}>Regístrate</h6></li>
              </ul>
            </span>

          </div>

        </div>

      </nav>

    </MainContainer>

  )

}

export default UnloggedNavBar;
