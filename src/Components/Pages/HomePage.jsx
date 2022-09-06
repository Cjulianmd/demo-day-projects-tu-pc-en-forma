//! Félix


import React, { useEffect } from 'react';
import { Button, HelperContainer, LandingCard, LandingSections, MainContainer, TestimoniesContainer } from '../../Styles/StylesSebastian';
import NavBar from '../Modules/NavBar';
import Footer from '../Modules/Footer';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../Utils/JulianFirebase';
import { getVideos } from '../../Redux/Actions/Actions';
import { useDispatch } from 'react-redux';

function HomePage() {

  const navigation = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {

    getDoc(doc(db, 'Videos', 'videos'))
      .then(doc => {
        if (doc.exists) {
          let videos = doc.data();
          let getVideosAction = Object.assign({}, getVideos);
          getVideosAction.payload = { preventivo: videos.preventivo, correctivo: videos.correctivo, software: videos.software }
          dispatch(getVideosAction);
        }
      })



  }, [dispatch]);

  return (

    <>

      <MainContainer>

        <NavBar />

        <HelperContainer>

          <LandingSections>

            <h1>Mantenimientos preventivos.</h1>

            <TestimoniesContainer>

              <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662233672/Demoday/Mantenimiento_wvadal.jpg" alt="Mantenimiento Preventivo" />

              <LandingCard>
                <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                  Son todas las acciones realizadas para evitar o prevenir daños y deterioro en los computadores, incluye limpieza física del equipo, limpieza lógica, actualización del sistema operativo y de programas como navegadores, reproductores, antivirus y paquetes de oficina.
                  <br />
                  La frecuencia con la que se debe realizar el mantenimiento preventivo cambia dependiendo del medio ambiente, en casas u oficinas.
                </p>
                <Button onClick={() => navigation("/preventive")}>Conoce más</Button>

              </LandingCard>

            </TestimoniesContainer>

          </LandingSections>

          <LandingSections>

            <h1>Mantenimientos correctivos.</h1>

            <TestimoniesContainer>

              <LandingCard>
                <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                  Se trata del conjunto de tareas realizadas para corregir fallas en un computador. Normalmente consisten en reparar o sustituir componentes defectuosos, que pueden ser de software o hardware. Todas estas acciones tienen en común que corrigen los errores del computador para restablecer su funcionamiento normal.
                  <br />
                  Lo ideal es evitar el mantenimiento correctivo el mayor tiempo posible. Aunque en algún momento será necesario pero hay algunas advertencias que puedes detectar y actuar para evitarlo.
                </p>
                <Button onClick={() => navigation("/corrective")}>Conoce más</Button>

              </LandingCard>

              <img src="https://res.cloudinary.com/dtxqusdhr/image/upload/v1662233672/Demoday/Mantenimiento_wvadal.jpg" alt="Mantenimiento Preventivo" />

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

        </HelperContainer>

      </MainContainer>

      <Footer />

    </>

  )

}

export default HomePage;