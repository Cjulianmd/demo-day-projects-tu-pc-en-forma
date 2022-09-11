
import React from 'react';
import { LandingImg, MainContainer } from '../../Styles/StylesSebastian';
import { IoMdMenu } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import '../../Styles/StylesSebastian.css';
import { getAuth, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { actionLogOut } from '../../Redux/Actions/Actions';

function NavBar() {

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

      <nav className="navbar fixed-top navbar-expand-lg navbar-light nabvar-background">

        <div className="container-fluid">
          <LandingImg onClick={() => navigation("/home")} className="hyperlink" src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662134335/Demoday/logo_vlilbq.png" />
          <a href="#" style={{ color: '#ffffff' }} className="navbar-brand hyperlink" onClick={() => navigation("/home")}>Tu PC en Forma</a>

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
                <a href="#" style={{ color: '#ffffff' }} className="nav-link active hyperlink2" aria-current="page" onClick={() => navigation("/home")} >Inicio</a>
              </li>
              <li className="nav-item">
                <a href="#" style={{ color: '#ffffff' }} className="nav-link hyperlink2" onClick={() => navigation("/preventive")} >Mantenimiento preventivo</a>
              </li>
              <li className="nav-item">
                <a href="#" style={{ color: '#ffffff' }} className="nav-link hyperlink2" onClick={() => navigation("/corrective")} >Mantenimiento correctivo</a>
              </li>
              <li className="nav-item">
                <a href="#" style={{ color: '#ffffff' }} className="nav-link hyperlink2" onClick={() => navigation("/software")} >Actualización de software</a>
              </li>
            </ul>
            <span style={{ marginRight: '3rem' }} className="navbar-text">
              <ul style={{ gap: '2rem' }} className="navbar-nav me-auto mb-2 mb-lg-0">
                {/*{false ? <li className="nav-item hyperlink"><h6 style={{ color: '#ffffff' }} aria-current="page" onClick={handleShow}>Admin</h6></li> : <></>
                }*/}
                <li className="nav-item hyperlink"><h6 style={{ color: '#ffffff' }} aria-current="page" onClick={()=>navigation("/user")}>Ver perfil</h6></li>
                <li className="nav-item hyperlink"><h6 style={{ color: '#ffffff' }} aria-current="page" onClick={letLogout}>Salir</h6></li>
              </ul>
            </span>
          </div>
        </div>
      </nav>


    </MainContainer>

  )

}

export default NavBar;
