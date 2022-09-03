

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LandingImg, MainContainer } from '../../Styles/StylesSebastian';

function UnloggedNavBar() {

  const navigation = useNavigate();

  return (

    <MainContainer>

      <nav className="navbar fixed-top navbar-expand-lg navbar-light nabvar-background">

        <div className="container-fluid">
          <LandingImg src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662134335/Demoday/logo_vlilbq.png" />
          <a style={{ color: '#ffffff' }} className="navbar-brand hyperlink" onClick={() => navigation("/landing")}>Tu PC en Forma</a>

          <div className="collapse navbar-collapse" id="navbarText">

            <ul style={{ marginLeft: '3rem' }} className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a style={{ color: '#ffffff' }} className="nav-link active hyperlink" aria-current="page" onClick={() => navigation("/landing")}>Home</a>
              </li>

              <li class="nav-item dropdown">
                <a
                  style={{ color: '#ffffff' }}
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Servicios
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    <a style={{ color: '#ffffff' }} class="dropdown-item" href="#">Mantenimiento preventivo</a>
                  </li>
                  <li>
                    <a style={{ color: '#ffffff' }} class="dropdown-item" href="#">Mantenimiento correctivo</a>
                  </li>
                  <li>
                    <a style={{ color: '#ffffff' }} class="dropdown-item" href="#">Actualización de software</a>
                  </li>

                </ul>

              </li>

            </ul>

            <span className="navbar-text">
              <ul style={{ gap: '2rem' }} className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item hyperlink"><h6 style={{ color: '#ffffff' }} aria-current="page">Comienza</h6></li>
                <li className="nav-item hyperlink"><h6 style={{ color: '#ffffff' }} aria-current="page">Regístrate</h6></li>
              </ul>
            </span>

          </div>

        </div>

      </nav>

    </MainContainer>

  )

}

export default UnloggedNavBar;
