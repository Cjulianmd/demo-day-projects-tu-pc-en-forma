


import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Input, MainContainer, MaintenanceCard, TargetContainer, TestimoniesContainer, TextArea } from '../../Styles/StylesSebastian';
import { db } from '../../Utils/JulianFirebase';

function SetAppointmentPage() {

  const user = useSelector(state => state.userLogIn);

  const navigation = useNavigate();

  const [appointmentInfo, setAppointmentInfo] = useState({
    name: user.name,
    apellidos: user.apellidos,
    DNI: '',
    correo: user.email,
    descripcion: '',
    equipo: '',
    fecha: '',
    hora: '',
    telefono: user.phone
  });

  const setInfo = (event) => {
    setAppointmentInfo({
      ...appointmentInfo,
      [event.target.name]: event.target.value,
    })
  }

  const setAppointment = () => {
    setDoc(doc(db, 'Citas', appointmentInfo.DNI), {
      name: appointmentInfo.name,
      apellidos: appointmentInfo.apellidos,
      DNI: appointmentInfo.DNI,
      correo: appointmentInfo.correo,
      descripcion: appointmentInfo.descripcion,
      equipo: appointmentInfo.equipo,
      estado: 'creada',
      fecha: appointmentInfo.fecha,
      hora: appointmentInfo.hora,
      tecnico: '',
      telefono: appointmentInfo.telefono
    })
    .then(() =>{
      toast.success('Tu cita fue agendada. Pronto te confirmamos quién la atiende.');
      navigation("/home");
    })
    .catch((err) =>{
      toast.error('Algo salió mal. Intenta de nuevo o contacta al administrador.')
    })
  }

  return (

    <MainContainer>

      <MaintenanceCard style={{ borderRadius: '25px' }}>

        <h2>Acontinuación, podrás agendar tu cita para tu mantenimiento.</h2>

        <p>Por favor, diligencia los campos con la información que te solicitamos. En la brevedad te daremos respuesta para confirmar la asignación de la cita.</p>

        <TargetContainer>

          <form style={{ width: '80%' }} onChange={setInfo}>
            <h3>Nombres</h3>
            <Input type="text" placeholder={user.name} required name="name" disabled />
            <h3>Apellidos</h3>
            <Input type="text" placeholder={user.apellidos} required name="apellidos" disabled />
            <h3>DNI</h3>
            <Input type="text" placeholder="Indica tu DNI" required name="DNI" />
            <h3>Teléfono</h3>
            <Input type="text" placeholder={user.phone} required name="phone" disabled />
            <h3>Correo</h3>
            <Input type="text" placeholder={user.email} required name="email" disabled />
            <h3>Marca del equipo</h3>
            <Input type="text" placeholder="Indica la marca de tu equipo" required name="equipo" />
            <h3>Fecha para atender la cita</h3>
            <Input type="text" placeholder="dd/mm/aaaa" required name="fecha" />
            <h3>Hora para atender la cita</h3>
            <Input type="text" placeholder="hh/mm" required name="hora" />
            <h3>Descripción</h3>
            <TextArea type="text" placeholder="Escribe una pequeña descripción del problema" required name="descripcion" maxlength="20" />
          </form>


        </TargetContainer>

        <TestimoniesContainer>
          <Button style={{ backgroundColor: '#ffffff', color: '#000000' }} onClick={() => navigation("/home")}>Regresar</Button>
          <Button style={{ backgroundColor: '#58E228', color: '#000000' }} onClick={setAppointment}>Agendar</Button>
        </TestimoniesContainer>

      </MaintenanceCard>

    </MainContainer>

  )

}

export default SetAppointmentPage;
