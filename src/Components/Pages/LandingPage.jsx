//! Sebastian

import React from 'react';
import { HelperContainer, LandingCard, LandingSections, MainContainer, Polaroid, PolaroidContainer, TargetContainer, TestimoniesContainer, ToolsContainer } from '../../Styles/StylesSebastian';
import Footer from '../Modules/Footer';
import UnloggedNavBar from '../Modules/UnloggedNavBar';
import { FaShieldVirus } from 'react-icons/fa';
import { MdVpnKey } from 'react-icons/md';
import { BsWifi } from 'react-icons/bs';

function LandingPage() {


  return (

    <>

      <MainContainer>

        <UnloggedNavBar />

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

            <h1>Mejora la experiencia con tu equipo.</h1>

            <ToolsContainer>

              <p>Acontinuación, te proponemos algunas herramientas con las cuales puedes mejorar la experiencia con tu equipo por tu propia cuenta:</p>

              <TestimoniesContainer style={{ margin: '3rem auto', gap: '4rem' }}>

                <TargetContainer>
                  <p>
                    <a
                      href="https://www.f-secure.com/es/home/free-tools/online-scanner"
                      target="_blank"
                      className="text-reset"
                      rel="noreferrer"
                    >
                      <FaShieldVirus style={{ fontSize: '8rem', marginLeft: '1rem' }} />
                    </a>
                  </p>
                  <h2>Escanea tu equipo</h2>
                </TargetContainer>

                <TargetContainer>
                  <p>
                    <a
                      href="https://www.nperf.com/en/"
                      target="_blank"
                      className="text-reset"
                      rel="noreferrer"
                    >
                      <BsWifi style={{ fontSize: '8rem', marginLeft: '1.5rem' }} />
                    </a>
                  </p>
                  <h2>Escanea tu velocidad</h2>
                </TargetContainer>

                <TargetContainer>
                  <p>
                    <a
                      href="https://chrome.google.com/webstore/detail/free-vpn-zenmate-best-vpn/fdcgdnkidjaadafnichfpabhfomcebme?hl=es"
                      target="_blank"
                      className="text-reset"
                      rel="noreferrer"
                    >
                      <MdVpnKey style={{ fontSize: '8rem', marginLeft: '0.5rem' }} />
                    </a>
                  </p>
                  <h2>Navega seguro</h2>
                </TargetContainer>

              </TestimoniesContainer>

            </ToolsContainer>


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
                    Realiza mantenimiento correctivo de tus equipos de cómputo. El mantemiento correctivo busca devolverle la vitaldiad a tu equipo. Esto cuando algún componente de hardware o aplicación falle y requiera de una intervención que los rehabilite dejándolos listos para que lo dejen todo en tus quehaceres.
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
                    «En <em>Tu PC en Forma</em> me realizan mantenimientos y actualizaciones sin necesidad de entregar mis equipos, en la mayoría de las veces.»
                  </p>
                </PolaroidContainer>
              </Polaroid>

              <Polaroid>
                <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662232185/Demoday/Arquitecta_lwqs45.jpg" alt="Testimonio Isabel" />
                <PolaroidContainer>
                  <h2>Isabel</h2>
                  <h3>Arquitecta</h3>
                  <p>
                    «<em>Tu PC en Forma</em> me asesoró de manera virtual con las licencias de los software que requiero para los proyectos que dirijo. Las conseguí rápido y económicas.»
                  </p>
                </PolaroidContainer>
              </Polaroid>

              <Polaroid>
                <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662232707/Demoday/Dise%C3%B1adora_hqcna4.jpg" alt="Testimonio Cindy" />
                <PolaroidContainer>
                  <h2>Cindy</h2>
                  <h3>Ilustradora</h3>
                  <p>
                    «Con <em>Tu PC en Forma</em> conseguí el computador y licencias para trabajar con fluídez y comodidad mis diseños y proyectos.»
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
