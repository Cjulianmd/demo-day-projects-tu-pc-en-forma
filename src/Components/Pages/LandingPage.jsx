//! Sebastian

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, HelperContainer, LandingCard, LandingSections, MainContainer, Polaroid, PolaroidContainer, TestimoniesContainer } from '../../Styles/StylesSebastian';
import Footer from '../Modules/Footer';
import UnloggedNavBar from '../Modules/UnloggedNavBar';

function LandingPage() {

  // const navigation = useNavigate();


  return (

    <>

      <MainContainer>

        <UnloggedNavBar />

        <HelperContainer>

          <LandingSections>

            <h1>Quiénes somos.</h1>

            <TestimoniesContainer>

              <img style={{width: '20%'}} src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662134335/Demoday/logo_vlilbq.png" alt="Logo de Marca" />

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

            <h1>Nuestros servicios.</h1>

            <TestimoniesContainer>

              <Polaroid>
                <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662233672/Demoday/Mantenimiento_wvadal.jpg" alt="Mantenimiento Preventivo" />
                <PolaroidContainer>
                  <h2>Mantenimiento preventivo</h2>
                  <p>
                    Realiza mantenimiento preventivo de tus equipos de cómputo. El mantemiento preventivo consiste en realizar escaneos especializados en búsqueda de jugadores indeseados al interior de tu equipo y la verificación de que las versiones de aplicaciones estén al día, listas para darlo todo en el partido de tus quehaceres.
                  </p>
                </PolaroidContainer>
              </Polaroid>

              <Polaroid>
                <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662233672/Demoday/Mantenimiento_wvadal.jpg" alt="Mantenimiento Correctivo" />
                <PolaroidContainer>
                  <h2>Mantenimiento correctivo</h2>
                  <p>
                    Realiza mantenimiento correctivo de tus equipos de cómputo. El mantemiento correctivo busca devolverle la vitaldiad a tu equipo. Esto cuando algún componente de hardware o aplicación que fallen y requieran de una intervención que los rehabilite dejándolos listos para el partido para que lo dejen todo en tus quehaceres.
                  </p>
                </PolaroidContainer>
              </Polaroid>

              <Polaroid>
                <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662235035/Demoday/Software_rsm8d3.jpg" alt="Actualización Software" />
                <PolaroidContainer>
                  <h2>Actualización de software</h2>
                  <p>
                    Manten tus aplicaciones actualziadas y con las más recientes licencias. Esto mantendrá tu equipo en forma y te permitirá ganar todos retos de trabajo y estudio, o todas las jugadas que necesites hacer en él. Estas se realizarán de manera ágil y remota, de manera que tu equipo no faltará a los compromisos.
                  </p>
                </PolaroidContainer>
              </Polaroid>

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


export default LandingPage;
