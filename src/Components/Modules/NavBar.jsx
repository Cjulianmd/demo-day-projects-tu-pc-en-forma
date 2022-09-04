//! Félix


import React from 'react';
import { LandingImg, MainContainer } from '../../Styles/StylesSebastian';
import { IoMdMenu } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import '../../Styles/StylesSebastian.css';

function NavBar() {

  const navigation = useNavigate();

  return (

    <MainContainer>

      <nav className="navbar navbar-expand-lg navbar-light nabvar-background">

        <div className="container-fluid">
          <LandingImg onClick={() => navigation("/landing")} className="hyperlink" src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662134335/Demoday/logo_vlilbq.png" />
          <a style={{ color: '#ffffff' }} className="navbar-brand hyperlink" onClick={() => navigation("/landing")}>Tu PC en Forma</a>

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
                <a style={{ color: '#ffffff' }} className="nav-link active" aria-current="page" onClick={() => navigation("/")} >Inicio</a>
              </li>
              <li className="nav-item">
                <a style={{ color: '#ffffff' }} className="nav-link" onClick={() => navigation("/preventive")} >Mantenimiento preventivo</a>
              </li>
              <li className="nav-item">
                <a style={{ color: '#ffffff' }} className="nav-link" onClick={() => navigation("/corrective")} >Mantenimiento correctivo</a>
              </li>
              <li className="nav-item">
                <a style={{ color: '#ffffff' }} className="nav-link" onClick={() => navigation("/software")} >Actualización de software</a>
              </li>
            </ul>
            <span className="navbar-text">
              <ul style={{ gap: '2rem', marginRight: '2rem' }} className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item hyperlink"><h6 style={{ color: '#ffffff' }} aria-current="page" onClick={() => navigation("/login")}>Salir</h6></li>
              </ul>
            </span>
          </div>
        </div>
      </nav>

    </MainContainer>

  )

}

export default NavBar;