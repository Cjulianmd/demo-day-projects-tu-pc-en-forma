//! Sebastian


import React, { useState } from 'react';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../Utils/JulianFirebase';
import { actionLogIn } from '../../Redux/Actions/Actions';
import { getAuth, deleteUser } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MainContainer } from '../../Styles/StylesSebastian';

function UserProfilePage() {

  const navigation = useNavigate();
  const user = useSelector(state => state.userLogIn);
  const dispatch = useDispatch();

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

  const updateUserInfo = () => {
    updateDoc(doc(db, 'Clientes', user.id), {
      name: newUserInfo.name,
      apellidos: newUserInfo.apellidos,
      phone: newUserInfo.phone
    })
      .then(() => {
        toast.success('Información actualizada con éxito.');
        let updateInfoAction = Object.assign({}, actionLogIn);
        updateInfoAction.payload = { name: newUserInfo.name, apellidos: newUserInfo.apellidos, phone: newUserInfo.phone };
        dispatch(updateInfoAction);
      })
  }

  const letDeleteUser = () => {
    deleteDoc(doc(db, 'Clientes', user.id))
      .then(() => {
        deleteUser(getAuth().currentUser)
          .then(() => {
            toast.success('Usuario eliminado exitosamente.')
            navigation("/");
          })
          .catch((error) => toast.error(`Ocurrió un error. ${error}. Por favor, contacta al administrador.`))
      })
      .catch((error) => toast.error(`Ocurrió un error. ${error}. Por favor, contacta al administrador.`))

  }



  return (

    <MainContainer>

    </MainContainer>

  )

}

export default UserProfilePage;
