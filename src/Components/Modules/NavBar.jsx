//! Félix


import React, { useState } from 'react';
import { Input, LandingImg, MainContainer } from '../../Styles/StylesSebastian';
import { IoMdMenu } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import '../../Styles/StylesSebastian.css';
import { useSelector } from 'react-redux';
import {toast} from 'react-toastify';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../FireBase/JulianFirebase';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function NavBar() {

  const navigation = useNavigate();
  const user = useSelector(state => state.userLogIn);

  const [newUserInfo, setNewUserInfo] = useState({
    name: '',
    apellidos: '',
    phone: ''
  });

  const setNewInfo = (event) => {
    setNewUserInfo({
      ...newUserInfo,
      [event.target.name]: event.target.value,
    })
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateUserInfo = () => {
    updateDoc(doc(db, 'Clientes', user.id), {
      name: newUserInfo.name,
      apellidos: newUserInfo.apellidos,
      phone: newUserInfo.phone
    })
    .then(() => {
      toast.success('Información actualizada con éxito.');
      setShow(false);
    })
  }


  return (

    <MainContainer>

      <nav className="navbar fixed-top navbar-expand-lg navbar-light nabvar-background">

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
                <a style={{ color: '#ffffff' }} className="nav-link active hyperlink" aria-current="page" onClick={() => navigation("/")} >Inicio</a>
              </li>
              <li className="nav-item">
                <a style={{ color: '#ffffff' }} className="nav-link hyperlink" onClick={() => navigation("/preventive")} >Mantenimiento preventivo</a>
              </li>
              <li className="nav-item">
                <a style={{ color: '#ffffff' }} className="nav-link hyperlink" onClick={() => navigation("/corrective")} >Mantenimiento correctivo</a>
              </li>
              <li className="nav-item">
                <a style={{ color: '#ffffff' }} className="nav-link hyperlink" onClick={() => navigation("/software")} >Actualización de software</a>
              </li>
            </ul>
            <span style={{ marginRight: '3rem' }} className="navbar-text">
              <ul style={{ gap: '2rem' }} className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item hyperlink"><h6 style={{ color: '#ffffff' }} aria-current="page" onClick={handleShow}>Usuario</h6></li>
                <li className="nav-item hyperlink"><h6 style={{ color: '#ffffff' }} aria-current="page" onClick={() => navigation("/landing")}>Salir</h6></li>
              </ul>
            </span>
          </div>
        </div>
      </nav>

      <Modal contentClassName="modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{user.name} {user.apellidos}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div style={{ justifyContent: 'center', alignItems: 'center' }}>
            Actualiza la información de tu perfil.

            <form onChange={setNewInfo}>
              <Input type="text" placeholder={user.name} name="name" required />
              <Input type="text" placeholder={user.apellidos} name="apellidos" required />
              <Input type="text" placeholder={user.phone} name="phone" required />
            </form>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="success" onClick={updateUserInfo}>
            Guardar
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Darse de baja
          </Button>
        </Modal.Footer>
      </Modal>

    </MainContainer>

  )

}

export default NavBar;