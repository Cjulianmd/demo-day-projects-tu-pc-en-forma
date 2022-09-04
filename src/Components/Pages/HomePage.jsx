//! Félix


import React from 'react';
import { HelperContainer, LandingCard, LandingSections, MainContainer, TestimoniesContainer } from '../../Styles/StylesSebastian';
import NavBar from '../Modules/NavBar';
import Footer from '../Modules/Footer';

function HomePage() {

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

              <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                Tu PC en Forma es un aplicativo que busca conectar a los usuarios de equipos de cómputo con un completo ecosistema de asesoramiento en mantenimientos, tanto en lo referente a software como a hadware; actualización de aplicaciones y licencias; y la consecuscón de los software más adecuados para sus necesidades.
                <br />
                <br />
                La principal propuesta de nuestro proyecto es la agilidad en el servicio de mantenimiento (entendiendo la premura del usuario y su necesidad para atender sus compromisos laborales o académicos). De acuerdo con esta necesidad, proponemos alcanzar la mayor proporción de los servicios de manera remota, sin perturbar las rutinas de los usuarios.
              </p>

            </TestimoniesContainer>

          </LandingSections>

          <LandingSections>

            <h1>Mantenimientos correctivos.</h1>

            <TestimoniesContainer>

              <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662233672/Demoday/Mantenimiento_wvadal.jpg" alt="Mantenimiento Preventivo" />

              <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                Tu PC en Forma es un aplicativo que busca conectar a los usuarios de equipos de cómputo con un completo ecosistema de asesoramiento en mantenimientos, tanto en lo referente a software como a hadware; actualización de aplicaciones y licencias; y la consecuscón de los software más adecuados para sus necesidades.
                <br />
                <br />
                La principal propuesta de nuestro proyecto es la agilidad en el servicio de mantenimiento (entendiendo la premura del usuario y su necesidad para atender sus compromisos laborales o académicos). De acuerdo con esta necesidad, proponemos alcanzar la mayor proporción de los servicios de manera remota, sin perturbar las rutinas de los usuarios.
              </p>

            </TestimoniesContainer>

          </LandingSections>

          <LandingSections>

            <h1>Actualización de software.</h1>

            <TestimoniesContainer>

              <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662235035/Demoday/Software_rsm8d3.jpg" alt="Mantenimiento Preventivo" />

              <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                Tu PC en Forma es un aplicativo que busca conectar a los usuarios de equipos de cómputo con un completo ecosistema de asesoramiento en mantenimientos, tanto en lo referente a software como a hadware; actualización de aplicaciones y licencias; y la consecuscón de los software más adecuados para sus necesidades.
                <br />
                <br />
                La principal propuesta de nuestro proyecto es la agilidad en el servicio de mantenimiento (entendiendo la premura del usuario y su necesidad para atender sus compromisos laborales o académicos). De acuerdo con esta necesidad, proponemos alcanzar la mayor proporción de los servicios de manera remota, sin perturbar las rutinas de los usuarios.
              </p>

            </TestimoniesContainer>

          </LandingSections>

        </HelperContainer>

      </MainContainer>

      <Footer />

    </>

  )

}

export default HomePage;