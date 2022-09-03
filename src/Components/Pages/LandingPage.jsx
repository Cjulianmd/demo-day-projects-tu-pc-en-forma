//! Sebastian

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HelperContainer, LandingCard, LandingSections, MainContainer, Polaroid, PolaroidContainer, TestimoniesContainer } from '../../Styles/StylesSebastian';
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

            <h1>Algunos de nuestros usuarios y sus testimonios.</h1>

            <TestimoniesContainer>

              <Polaroid>
                <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662232269/Demoday/Contador_igw7zk.jpg" />
                <PolaroidContainer>
                  <h2>Juan</h2>
                  <h3>Contador</h3>
                  <p>
                    «Conocí a <em>Tu PC en Forma</em> por recomendación de una compañera de la universidad, en un día en el cual mi PC sufrió una avería con el disco duro. Ellos me prestaron un equipo durante los dos días que tardaron recuperando la información de mi disco y agregándole uno nuevo al computador; de manera que no tuve que parar mi trabajo ni mis estudios mientras recuperaba mi equipo. Desde entonces, mantengo mi computar en forma de la mano de su calificado equipo, me realizan mantenimientos y actualizaciones sin necesidad de entregar mis equipos, en la mayoría de las veces.»
                  </p>
                </PolaroidContainer>
              </Polaroid>

              <Polaroid>
                <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662232185/Demoday/Arquitecta_lwqs45.jpg" />
                <PolaroidContainer>
                  <h2>Isabel</h2>
                  <h3>Arquitecta</h3>
                  <p>
                    «Conocí a <em>Tu PC en Forma</em> con dos compañeras de la constructura cuando estábamos en la búsqueda de las licencias para los programas de diseño que utilizamos en nuestra labor. Su calificado equipo me asesoró de manera virtual con las licencias y versiones de los software especializados que requiero para atender los proyectos que dirijo, ayudándome a conseguirlas de manera rápida y económica. Desde entonces, mantengo mi computar en forma de la mano de su calificado equipo, me realizan mantenimientos y actualizaciones sin necesidad de entregar mis equipos, en la mayoría de las veces.»
                  </p>
                </PolaroidContainer>
              </Polaroid>

              <Polaroid>
                <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662232707/Demoday/Dise%C3%B1adora_hqcna4.jpg" />
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
