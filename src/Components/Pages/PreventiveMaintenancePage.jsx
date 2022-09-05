//! Julián


import React from 'react';
import { HelperContainer, LandingCard, LandingSections, MainContainer, MaintenanceImg } from '../../Styles/StylesSebastian';
import Footer from '../Modules/Footer';
import NavBar from '../Modules/NavBar';

function PreventiveMaintenancePage() {

  return (

    <>
      <MainContainer>

        <NavBar />

        <HelperContainer>

          <LandingSections>

            <h1>Mantenimientos preventivos.</h1>

            <LandingCard>

              <MaintenanceImg style={{ margin: '2rem auto' }} src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662393454/Demoday/Mantenimientos_anxaqn.png" alt="Mantenimientos Imagen" />

              <h2>¿Qué incluye un buen mantenimiento?</h2>
              <p>

                <b>1. Verificación de funcionamiento:</b> antes de realizar cualquier acción se debe verificar que el equipo funcione bien y tomar nota de comportamientos extraños o desconfiguraciones en el sistema operativo.

                <br /><br />

                <b>2. Limpieza física:</b> consiste en desarmar y limpiar de los componentes físicos (hardware) del equipo.
                En el caso de los computadores de mesa se debe usar una sopladora para sacar el polvo y químicos especiales para limpiar las áreas delicadas. Con los computadores portátiles se deben cumplir tres etapas cuidadosamente:

                <br />

                <ul style={{ marginLeft: '3rem' }}>
                  <li> Primero se debe desarmar el equipo y separar los componentes.</li>
                  <li> Segundo limpiar todas las partes con una brocha, lubricar el ventilador de la CPU y cambiar la crema disipadora.</li>
                  <li> Tercero, volver a ensamblar el equipo y hacer pruebas de funcionamiento.</li>
                </ul>

                <br />

                <b>3. Limpieza lógica:</b> El último paso se divide en cuatro acciones: eliminar, actualizar, desinstalar e instalar.

                <br />

                <ul style={{ marginLeft: '3rem' }}>
                  <li>Eliminar virus si los hay, también los archivos temporales del sistema, vaciar papeleras de reciclaje y borrar historiales antiguos.</li>
                  <li>Actualizar antivirus, aplicaciones y programas como navegadores, reproductores, lectores de pdf, entre otros.</li>
                  <li>Desinstalar programas y aplicaciones sospechosas, obsoletas o innecesarias.</li>
                  <li>Instalar programas necesarios, en su mayoría son aplicaciones de seguridad como antimalware o cortafuegos, también puede ser algún programa que haya pedido el cliente.</li>
                </ul>
              </p>
              <br />

              <h2>Características de un mantenimiento preventivo</h2>
              <p>
                El mantenimiento preventivo se diferencia de los demás en que:
                <br />
                <ul style={{ marginLeft: '3rem' }}>
                  <li>Previene daños: Este es su principal objetivo, al eliminar agentes dañinos y corregir desviaciones de funcionamiento se evitan gran cantidad de daños.</li>
                  <li>Aumenta la vida útil del computador: Al mantener el equipo en buenas condiciones y evitar situaciones de riesgo se garantiza la vida útil del equipo.</li>
                  <li>Es económico: Ya que el proceso está estandarizado y rara vez se necesitan repuestos.</li>
                  <li>Se realiza antes de que algo falle: El mantenimiento preventivo en cualquier área debe hacerse antes de que existan averías o fallas en los equipos. El objetivo principal es evitar que los equipos fallen y causen retrasos a sus usuarios.</li>
                  <li>Es rutinario: Las tareas a realizar durante este tipo de mantenimiento, están estipuladas mediante un protocolo y suelen ser bastante mecánicas.</li>
                  <li>Suele ser periódico y programado: Es ideal crear calendarios de mantenimiento preventivo y programar las fechas, herramientas y avisos necesarios. Esto evita que los equipos estén fuera de servicio por mucho tiempo y en momentos críticos.</li>
                </ul>
              </p>

              <br />
              <h2>Beneficios del mantenimiento preventivo de computadores</h2>
              <p>
                Realizar mantenimiento preventivo regularmente tiene algunos efectos buenos en los computadores:
                <ul style={{ marginLeft: '3rem' }}>
                  <li>Evita el sobrecalentamiento: Al reemplazar la crema disipadora y las almohadillas térmicas se garantiza el buen funcionamiento del sistema de refrigeración y se previene el sobrecalentamiento.</li>
                  <li>Evita el deterioro de los ventiladores: Al lubricar los ventiladores evita que se averíen por fricción y que pierdan su centro.</li>
                  <li>Elimina agentes peligrosos: La limpieza física elimina grasa, sustancias salinas, migajas de comida y todo tipo de residuos dañinos.</li>
                </ul>
              </p>

            </LandingCard>

          </LandingSections>

        </HelperContainer>

      </MainContainer>

      <Footer />
    </>

  )

}

export default PreventiveMaintenancePage;