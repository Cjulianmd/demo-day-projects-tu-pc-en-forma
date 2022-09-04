//! Félix


import React from 'react';
import { Button, HelperContainer, LandingCard, LandingSections, MainContainer, Polaroid, PolaroidContainer, TestimoniesContainer } from '../../Styles/StylesSebastian';
import NavBar from '../Modules/NavBar';
import Footer from '../Modules/Footer';
import { useNavigate } from 'react-router-dom';

function HomePage() {

  const navigation = useNavigate();

  return (

    <>

      <MainContainer>

        <NavBar />

        <HelperContainer>

          <LandingSections>

            <h1>Quiénes somos.</h1>

            <TestimoniesContainer>

              <img style={{ width: '20%' }} src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662134335/Demoday/logo_vlilbq.png" alt="Logo de Marca" />

              <LandingCard>

                <h2>Tu PC en Forma.</h2>

                <p>
                  Tu PC en Forma es un aplicativo que busca conectar a los usuarios de equipos de cómputo con un completo ecosistema de asesoramiento en mantenimientos, tanto en lo referente a software como a hadware; actualización de aplicaciones y licencias; y la consecuscón de los software más adecuados para sus necesidades.
                  <br />
                  <br />
                  La principal propuesta de nuestro proyecto es la agilidad en el servicio de mantenimiento (entendiendo la premura del usuario y su necesidad para atender sus compromisos laborales o académicos). De acuerdo con esta necesidad, proponemos alcanzar la mayor proporción de los servicios de manera remota, sin perturbar las rutinas de los usuarios.
                </p>

              </LandingCard>

            </TestimoniesContainer>

          </LandingSections>

          <LandingSections>

            <h1>Mantenimientos preventivos.</h1>

            <TestimoniesContainer>

              <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662233672/Demoday/Mantenimiento_wvadal.jpg" alt="Mantenimiento Preventivo" />

              <LandingCard>
                <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                  Podemos definirlo como: “Todas las acciones realizadas para evitar o prevenir daños y deterioro en los computadores”, incluye limpieza física del equipo, limpieza lógica, actualización del sistema operativo y de programas como navegadores, reproductores, antivirus y paquetes de oficina (el paquete más conocido es Microsoft Office, que incluye Word, Excel, Power Point, entre otros).
                  <br />
                  - La frecuencia con la que se debe realizar el mantenimiento preventivo cambia dependiendo del medio ambiente, en casas u oficinas, los agentes nocivos más comunes son el polvo y residuos de comida en contacto mesurado, en estos casos dos mantenimientos preventivos al año son suficientes.
                  <br />
                  - En negocios comerciales, ubicados frente a calles transitadas hay más polvo y hollín generado por los vehículos, así que se deben realizar al menos tres mantenimientos preventivos al año.
                  <br />
                  - En ambientes más fuertes como construcciones, fincas o industrias donde hay más polvo, pinturas, aerosoles, humedad o químicos corrosivos, recomendamos realizar mantenimiento cada tres meses.
                </p>
                <Button onClick={() => navigation("/preventive")}>Conoce más</Button>
              </LandingCard>

            </TestimoniesContainer>

          </LandingSections>

          <LandingSections>

            <h1>Mantenimientos correctivos.</h1>

            <TestimoniesContainer>

              <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662233672/Demoday/Mantenimiento_wvadal.jpg" alt="Mantenimiento Preventivo" />

              <LandingCard>
                <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                  Se trata del conjunto de tareas técnicas, realizadas para corregir fallas en un computador. Normalmente consisten en reparar o sustituir componentes defectuosos, que pueden ser de software o hardware. En los casos donde la falla es física (que proviene del hardware) es común cambiar componentes como el disco duro o la memoria RAM. Y cuando la falla es lógica (que proviene del software) se acostumbra a re-instalar programas, eliminar antivirus o formatear. Pero todas estas acciones tienen en común que corrigen los errores del computador para restablecer su funcionamiento normal.
                  <br />
                  Lo ideal es evitar el mantenimiento correctivo el mayor tiempo posible. Aunque en algún momento será necesario pero hay algunas advertencias que puedes detectar y actuar para evitarlo.
                </p>
                <Button onClick={() => navigation("/corrective")}>Conoce más</Button>
              </LandingCard>

            </TestimoniesContainer>

          </LandingSections>

          <LandingSections>

            <h1>Actualización de software.</h1>

            <TestimoniesContainer>

              <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662235035/Demoday/Software_rsm8d3.jpg" alt="Mantenimiento Preventivo" />

              <LandingCard>
                <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                  Las actualizaciones de software (también conocidas como parches) son fragmentos adicionales de software publicados por quienes producen los sistemas operativos y programas que usan nuestros equipos con el fin de mejorarlos.
                  Estas actualizaciones se instalan sobre el software actual del dispositivo y no suelen requerir que se instalen los programas desde cero.
                </p>
                <Button onClick={() => navigation("/software")}>Conoce más</Button>
              </LandingCard>

            </TestimoniesContainer>

          </LandingSections>

          <LandingSections>

            <h1>Nuestros partners.</h1>

            <TestimoniesContainer style={{ margin: '3rem auto' }}>

              <div className="card">
                <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662305720/Demoday/Logitech_kk7zuf.jpg" className="card-img" alt="Logitech Logo" />
              </div>

              <div className="card">
                <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662305720/Demoday/norton_gdyakw.jpg" className="card-img" alt="Norton Logo" />
              </div>

              <div className="card">
                <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662305720/Demoday/tplink_gpfkyh.jpg" className="card-img" alt="TpLink Logo" />
              </div>

              <div className="card">
                <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662305720/Demoday/windows_wmw4ni.png" className="card-img" alt="Windows Logo" />
              </div>

              <div className="card">
                <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662305720/Demoday/ubuntu_d9wn0i.jpg" className="card-img" alt="Ubuntu Logo" />
              </div>

              <div className="card">
                <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662305720/Demoday/lenovo_zhqnal.png" className="card-img" alt="Lenovo Logo" />
              </div>

              <div className="card">
                <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662305720/Demoday/Asus_nh1sqi.jpg" className="card-img" alt="Asus Logo" />
              </div>

              <div className="card">
                <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662305720/Demoday/Avast_l1vyyf.jpg" className="card-img" alt="Avast Logo" />
              </div>

            </TestimoniesContainer>

          </LandingSections>

          <LandingSections>

            <h1>Algunos de nuestros usuarios y sus testimonios.</h1>

            <TestimoniesContainer>

              <Polaroid>
                <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662232269/Demoday/Contador_igw7zk.jpg" alt="Testimonio Juan" />
                <PolaroidContainer>
                  <h2>Juan</h2>
                  <h3>Contador</h3>
                  <p>
                    «Conocí a <em>Tu PC en Forma</em> por recomendación de una compañera de la universidad, en un día en el cual mi PC sufrió una avería con el disco duro. Ellos me prestaron un equipo durante los dos días que tardaron recuperando la información de mi disco y agregándole uno nuevo al computador; de manera que no tuve que parar mi trabajo ni mis estudios mientras recuperaba mi equipo. Desde entonces, mantengo mi computar en forma de la mano de su calificado equipo, me realizan mantenimientos y actualizaciones sin necesidad de entregar mis equipos, en la mayoría de las veces.»
                  </p>
                </PolaroidContainer>
              </Polaroid>

              <Polaroid>
                <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662232185/Demoday/Arquitecta_lwqs45.jpg" alt="Testimonio Isabel" />
                <PolaroidContainer>
                  <h2>Isabel</h2>
                  <h3>Arquitecta</h3>
                  <p>
                    «Conocí a <em>Tu PC en Forma</em> con dos compañeras de la constructura cuando estábamos en la búsqueda de las licencias para los programas de diseño que utilizamos en nuestra labor. Su calificado equipo me asesoró de manera virtual con las licencias y versiones de los software especializados que requiero para atender los proyectos que dirijo, ayudándome a conseguirlas de manera rápida y económica. Desde entonces, mantengo mi computar en forma de la mano de su calificado equipo, me realizan mantenimientos y actualizaciones sin necesidad de entregar mis equipos, en la mayoría de las veces.»
                  </p>
                </PolaroidContainer>
              </Polaroid>

              <Polaroid>
                <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662232707/Demoday/Dise%C3%B1adora_hqcna4.jpg" alt="Testimonio Cindy" />
                <PolaroidContainer>
                  <h2>Cindy</h2>
                  <h3>Ilustradora</h3>
                  <p>
                    «Conocí a <em>Tu PC en Forma</em> mientras buscaba un lugar de confianza para adquirir en computador que me permitiera trabajar con fluídez y comodidad mis diseños y proyectos. Con ellos encontré muy buenos equipos a precios justos, gracias a sus alíados comerciales, junto con los software necesarios y sus respectivas licencias. Y no solo encontré los equipos que necesitaba, recibí un correcto acompañamiento en su mantenimiento. Desde entonces, mantengo mi computar en forma de la mano de su calificado equipo, me realizan mantenimientos y actualizaciones sin necesidad de entregar mis equipos, en la mayoría de las veces.»
                  </p>
                </PolaroidContainer>
              </Polaroid>

            </TestimoniesContainer>

          </LandingSections>

        </HelperContainer>

      </MainContainer>

      <Footer />

    </>

  )

}

export default HomePage;