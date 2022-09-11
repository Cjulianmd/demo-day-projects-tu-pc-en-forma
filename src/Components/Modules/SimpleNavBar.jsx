

import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { actionLogOut } from '../../Redux/Actions/Actions';
import { LandingImg, MainContainer } from '../../Styles/StylesSebastian';

function SimpleNavBar() {

  const navigation = useNavigate();
  const dispatch = useDispatch();

  const letLogout = () => {
    signOut(getAuth())
      .then(() => {
        let logOutAction = Object.assign({}, actionLogOut);
        dispatch(logOutAction);
        toast.success('Cierre de sesión exitoso.')
        navigation("/");
      })
  }

  return (

    <MainContainer>

      <nav className="navbar navbar-light nabvar-background fixed-top">

        <div className="container-fluid">

          <a href="#" style={{ color: '#ffffff' }} className="navbar-brand hyperlink" onClick={() => navigation("/landing")}>
            <LandingImg src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662134335/Demoday/logo_vlilbq.png" />
            <small>Tu PC en Forma</small>
          </a>

          <span style={{marginRight: '3rem'}} className="navbar-text">
            <ul style={{ gap: '2rem' }} className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item hyperlink2"><h6 style={{ color: '#ffffff' }} aria-current="page" onClick={letLogout}>Salir</h6></li>
            </ul>
          </span>

        </div>

      </nav>

    </MainContainer>

  )

}

export default SimpleNavBar;
