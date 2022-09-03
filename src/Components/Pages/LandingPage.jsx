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

            <TestimoniesContainer>

                <Polaroid>
                  <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662230712/Demoday/Contador_wkcbrb.jpg" />
                  <PolaroidContainer>
                    <h2>Juan</h2>
                    <h3>Contador</h3>
                    <p>
                      «Conocí a <em>Tu PC en Forma</em> por recomendación de una compañera de la universidad, en un día en el cual mi PC sufrió una avería con el disco duro. Ellos me prestaron un equipo durante los dos días que tardaron recuperando la información de mi disco y agregándole uno nuevo al computador; de manera que no tuve que parar mi trabajo ni mis estudios mientras recuperaba mi equipo. Desde entonces, mantengo mi computar en forma de la mano de su calificado equipo, me realizan mantenimientos y actualizaciones sin necesidad de entregar mis equipos, en la mayoría de las veces.»
                    </p>
                  </PolaroidContainer>
                </Polaroid>

                <Polaroid>
                  <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662230712/Demoday/Contador_wkcbrb.jpg" />
                  <PolaroidContainer>
                    <h2>Juan</h2>
                    <h3>Contador</h3>
                    <p>
                      «Conocí a <em>Tu PC en Forma</em> por recomendación de una compañera de la universidad, en un día en el cual mi PC sufrió una avería con el disco duro. Ellos me prestaron un equipo durante los dos días que tardaron recuperando la información de mi disco y agregándole uno nuevo al computador; de manera que no tuve que parar mi trabajo ni mis estudios mientras recuperaba mi equipo. Desde entonces, mantengo mi computar en forma de la mano de su calificado equipo, me realizan mantenimientos y actualizaciones sin necesidad de entregar mis equipos, en la mayoría de las veces.»
                    </p>
                  </PolaroidContainer>
                </Polaroid>

                <Polaroid>
                  <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662230712/Demoday/Contador_wkcbrb.jpg" />
                  <PolaroidContainer>
                    <h2>Juan</h2>
                    <h3>Contador</h3>
                    <p>
                      «Conocí a <em>Tu PC en Forma</em> por recomendación de una compañera de la universidad, en un día en el cual mi PC sufrió una avería con el disco duro. Ellos me prestaron un equipo durante los dos días que tardaron recuperando la información de mi disco y agregándole uno nuevo al computador; de manera que no tuve que parar mi trabajo ni mis estudios mientras recuperaba mi equipo. Desde entonces, mantengo mi computar en forma de la mano de su calificado equipo, me realizan mantenimientos y actualizaciones sin necesidad de entregar mis equipos, en la mayoría de las veces.»
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
