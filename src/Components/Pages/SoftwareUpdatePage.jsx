//! Julián
import React from 'react';
import  Navbar  from '../Modules/NavBar';
import Footer from '../Modules/Footer';
import VideoPlayer from '../Modules/VideoPlayer';
import { Button, HelperContainer, LandingCard, LandingSections, MainContainer, MaintenanceCard, MaintenanceImg, VideoContainer } from '../../Styles/StylesSebastian';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function SoftwareUpdatePage() {

  const videoS = useSelector(state => state.ManVideos.software);
  const navigation = useNavigate();
  return (
    <>
    <MainContainer>

      <Navbar/>

      <HelperContainer>

        <LandingSections>

          <h1>Actualizacion de software.</h1>

          <LandingCard>

            <MaintenanceImg style={{ margin: '2rem auto' }} src="https://res.cloudinary.com/felixces/image/upload/v1662664321/imagenes%20demo/homepage/update_dn2jrk.jpg" alt="Mantenimientos Imagen" />

            <h2>Actualizaciones de software: qué son, para qué sirven, cuándo instalarlas</h2>
            <p>

              <b>1. ¿Qué son las actualizaciones de software?</b> Las actualizaciones de software (también conocidas como parches) son fragmentos adicionales de software publicados por quienes producen los sistemas operativos y programas que usan nuestros equipos con el fin de mejorarlos.
              Estas actualizaciones se instalan sobre el software actual del dispositivo y no suelen requerir que se instalen los programas desde cero.

              <br /><br />

              <b>2. Tipos de actualizaciones: ¿updates o upgrades? ¿Actualizaciones, parches o mejoras?</b>Si bien podríamos discutir sobre si lo más adecuado sería usar los términos «actualización», «parche» (sobre todo usado en España) o «mejora», lo más importante es entender que existen dos tipos de ellas, y que tienen diferencias clave que detallaremos a continuación:
          
              <br />
              <b>A.  Actualizaciones</b>
              <ul style={{ marginLeft: '3rem' }}>
                <li>Hacen cambios menores en el software.</li>
                <li>Corrigen errores u optimizan el funcionamiento de las funciones que ya tenemos.</li>
                <li>Es el software existente, mejorado.</li>  
                <li>Suelen ser fáciles de instalar, sin opciones que elegir.</li> 
                <li>Suelen ser gratuitas.</li>   
              </ul>
              <br />
              <b>B.  Mejoras</b>
              <ul style={{ marginLeft: '3rem' }}>
                <li>Hacen cambios mayores en el software.</li>
                <li>Agregan capacidades nuevas y/o hacen cambios importantes en la interfaz.</li>
                <li>Es software nuevo que elimina y reemplaza al anterior.</li>  
                <li>Son más complicadas de instalar, con opciones varias para seleccionar.</li> 
                <li>Suelen ser pagas.</li>   
              </ul>
             
            
            </p>
            <br />

            <h2>¿Qué hacen las actualizaciones de software? ¿Para qué sirven?</h2>
            <p>
            Expandiendo lo anterior, ahora repasaremos los tres motivos más comunes por los que existen las actualizaciones de software:
              <br />
              <ul style={{ marginLeft: '3rem' }}>
                <li> Corrección de vulnerabilidades de seguridad</li>
                <li>Corrección de errores</li>
                <li> Mejoras del producto</li>
                
              </ul>
            </p>

            <br />
            <h2>¿Cuándo hay que buscar e instalar actualizaciones de software?</h2>
            <p>
            Siempre. Y conviene instalarlas lo más rápido posible.
            Como dijimos, descargar actualizaciones e instalarlas a veces puede ser una tarea engorrosa, pero las ventajas que obtenemos valen la pena, aún cuando no siempre nos resulten evidentes. Cuando las instalamos y todo funciona como debe, por lo general prevenimos problemas, lo que hace difícil medir el perjuicio potencial de no instalarlas.

Afortunadamente, los sistemas operativos y la mayoría de los programas instalados en nuestros dispositivos suelen hacer el trabajo por nosotros con muy poca o ninguna intervención, minimizando los riesgos a que estamos expuestos. Esto nos ayuda, pero no debemos bajar la guardia.
            </p>
            <h2>¿Cada cuánto se debe hacer mantenimiento correctivo al computador?​</h2>
            <p>
            Este tipo de mantenimiento no se programa en el tiempo, por el contrario, se trata de evitar, debido a esto no hay un tiempo establecido para realizarlo.
           El mantenimiento correctivo se hace cuando el computador falla y es obligatorio.
            </p>
           
            <h2>La clave: constancia y reducción de la superficie de ataque​</h2>
            <p>
            Para los hackers y los sistemas automáticos que utilizan (llamados robots, o «bots»), las vías para acceder a empresas y hogares incluyen una amplia variedad de dispositivos y sistemas:
            <ul style={{ marginLeft: '3rem' }}>
                <li>computadoras y servidores,</li>
                <li>teléfonos y tabletas,</li>
                <li>cámaras, sensores y hasta autos (IoT),</li>
                <li>almacenamiento en la nube (como OneDrive o Dropbox),</li>
                <li>y hasta las empresas que hacen el software que usamos.</li>
              </ul>
            </p>
            <br />
            <p> La solución está cerca, pero debemos cambiar nuestro modo de pensar sobre que nosotros mismos podemos hacer todo lo necesario para solucionar nuestros problemas informáticos.
            Pedir ayuda a personal especializado puntualmente o, lo más recomendable, contratar un servicio regular de monitoreo, actualizaciones y respaldos, actualmente es el camino más seguro y económico. Aceptar nuestras debilidades nos permite aprovechar al máximo en nuestras fortalezas.
            </p>
          </LandingCard>

          <VideoContainer>
            <VideoPlayer  video={videoS} />
          </VideoContainer>


        </LandingSections>

        <LandingSections>

          <MaintenanceCard>

            <h2>¡Agenda tu mantenimiento con nosotros!</h2>

            <p>Confía en nuestros <em>DT</em> expertos para que mantengan en forma tu equipo y, así, esté siempre listo para los partidos en los cuales lo inscrba, alcanzando tus metas y cumpliendo con tus proyectos.</p>

            <Button onClick={()=>navigation('/tecnico')}>Agenda tu cita</Button>  {/* AQUÍ SE DIRECCIONARÁ A LA VISTA QUE CONSTRUYÓ JULIÁN */}

          </MaintenanceCard>

        </LandingSections>

      </HelperContainer>

    </MainContainer>

    <Footer />
  </>


  )

}

export default SoftwareUpdatePage;