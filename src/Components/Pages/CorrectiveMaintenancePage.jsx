
import React from 'react';
import  Navbar  from '../Modules/NavBar';
import Footer from '../Modules/Footer';
import VideoPlayer from '../Modules/VideoPlayer';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, HelperContainer, LandingCard, LandingSections, MainContainer, MaintenanceCard, MaintenanceImg, VideoContainer } from '../../Styles/StylesSebastian';

function CorrectiveMaintenancePage() {


  const videoC = useSelector(state => state.ManVideos.correctivo);
  const navigation = useNavigate();

  return (


    <>
      <MainContainer>

        <Navbar />

        <HelperContainer>

          <LandingSections>

            <h1>Mantenimientos correctivos.</h1>

            <LandingCard>

              <MaintenanceImg style={{ margin: '2rem auto' }} src="https://res.cloudinary.com/felixces/image/upload/v1662408204/imagenes%20demo/homepage/correctivo_bff1nm.jpg" alt="Mantenimientos Imagen" />

              <h2>¿Qué es el mantenimiento correctivo de computadores?</h2>
              <p>

                <b>1. ¿ De que se trata ?</b> Se trata del conjunto de tareas técnicas, realizadas para corregir fallas en un computador. Normalmente consisten en reparar o sustituir componentes defectuosos, que pueden ser de software o hardware.

                <br /><br />

                <b>2. ¿ Que fallas hay?</b> En los casos donde la falla es física (que proviene del hardware) es común cambiar componentes como el disco duro o la memoria RAM.

                Y cuando la falla es lógica (que proviene del software) se acostumbra a re-instalar programas, eliminar antivirus o formatear.

                Pero todas estas acciones tienen en común que corrigen los errores del computador para restablecer su funcionamiento normal.

                <br />



              </p>
              <br />

              <h2>Mantenimiento correctivo de hardware</h2>
              <p>
                Este mantenimiento se hace cuando el origen de la falla está en los componentes físicos (memoria RAM, disco duro, entre otros) del computador. Estos son algunos ejemplos:
                <br />
                <ul style={{ marginLeft: '3rem' }}>
                  <li>Cambio de componentes como la fuente de poder o el disco duro.</li>
                  <li>Reconstrucción de carcasas o bisagras en caso de portátiles.</li>
                  <li>Reparación electrónica.</li>

                </ul>
              </p>

              <br />
              <h2>Características del mantenimiento correctivo</h2>
              <p>
                Igual que el mantenimiento preventivo, este tipo de mantenimiento tiene algunos factores que lo caracterizan, como:
                <ul style={{ marginLeft: '3rem' }}>
                  <li>No se programa en el tiempo.</li>
                  <li>Se realiza después del daño.</li>
                  <li>Casi siempre es más costoso que el mantenimiento preventivo.</li>
                  <li>Implica una pausa total o parcial de funcionamiento.</li>
                  <li>Toma más tiempo que el mantenimiento preventivo.</li>
                </ul>
              </p>
              <h2>¿Cada cuánto se debe hacer mantenimiento correctivo al computador?​</h2>
              <p>
                Este tipo de mantenimiento no se programa en el tiempo, por el contrario, se trata de evitar, debido a esto no hay un tiempo establecido para realizarlo.
                El mantenimiento correctivo se hace cuando el computador falla y es obligatorio.
              </p>

              <h2>¿Cómo evitar los mantenimientos correctivos?​</h2>
              <p>
                Como mencionamos antes, lo ideal es evitar el mantenimiento correctivo el mayor tiempo posible. Aunque en algún momento será necesario pero hay algunas advertencias que puedes detectar y actuar para evitarlo, como:
                <ul style={{ marginLeft: '3rem' }}>
                  <li>El sobrecalentamiento: si notas que tu computador se está calentando de más, llévalo a mantenimiento preventivo, esto te va a evitar una reparación más costosa a futuro.</li>
                  <li>Fallas repentinas: si el computador se reinicia solo, se demora mucho en encender o presenta comportamientos extraños, pídele a tu técnico de confianza que lo revise.</li>
                  <li>Avisos del antivirus: si tu antivirus te está diciendo que el equipo está en riesgo o que hay alguna amenaza que no ha podido eliminar, préstale atención y si es necesario pide soporte técnico.</li>
                </ul>
              </p>

            </LandingCard>

            <VideoContainer>
              <VideoPlayer video={videoC} />
            </VideoContainer>


          </LandingSections>

          <LandingSections>

            <MaintenanceCard>

              <h2>¡Agenda tu mantenimiento con nosotros!</h2>

              <p>Confía en nuestros <em>DT</em> expertos para que mantengan en forma tu equipo y, así, esté siempre listo para los partidos en los cuales lo inscrba, alcanzando tus metas y cumpliendo con tus proyectos.</p>

              <Button onClick={() => navigation("/citas")}>Agenda tu cita</Button>  {/* AQUÍ SE DIRECCIONARÁ A LA VISTA QUE CONSTRUYÓ JULIÁN */}

            </MaintenanceCard>

          </LandingSections>

        </HelperContainer>

      </MainContainer>

      <Footer />
    </>

  )

}

export default CorrectiveMaintenancePage;