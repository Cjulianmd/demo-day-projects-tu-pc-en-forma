//! Sebastian


import React from 'react';
import { MainContainer } from '../../Styles/StylesSebastian';
import '../../Styles/StylesSebastian.css'
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin, BsGithub, BsTelephone, BsWifi } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';
import { FaShieldVirus } from 'react-icons/fa';
import { MdVpnKey } from 'react-icons/md';


function Footer() {

  return (

    <MainContainer>

      <footer className="footer-background text-center fixed-bottom text-lg-start">

        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

          <div className="me-5 d-none d-lg-block">
            <span>Conéctate con nosotros:</span>
          </div>


          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <a href="https://www.facebook.com/profile.php?id=100071024058004" target="_blank" className="me-4 text-reset">
              <BsFacebook />
            </a>
            <a href="https://twitter.com/geek_colombia" target="_blank" className="me-4 text-reset">
              <BsTwitter />
            </a>
            <a href="https://www.instagram.com/laacademiageek/?hl=es" target="_blank" className="me-4 text-reset">
              <BsInstagram />
            </a>
            <a href="https://www.linkedin.com/company/academia-geek-bootcamp/?originalSubdomain=co" target="_blank" className="me-4 text-reset">
              <BsLinkedin />
            </a>
            <a href="https://github.com/academia-geek" target="_blank" className="me-4 text-reset">
              <BsGithub />
            </a>
          </div>

        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">

            <div className="row mt-3">

              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  Tu PC en Forma
                </h6>
                <p>
                  Somos tu mejor aliado a la hora de tener tu equipo de cómputo en forma para afrontar los mejores retos y puedas ganar por goleada.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  Servicios
                </h6>
                <p>
                  <a className="text-reset">Mantenimiento preventivo</a>
                </p>
                <p>
                  <a className="text-reset">Mantenimiento correctivo</a>
                </p>
                <p>
                  <a className="text-reset">Actualización de software</a>
                </p>
                <p>
                  <a className="text-reset">Compra de hardware</a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 class="text-uppercase fw-bold mb-4">
                  Herramientas útiles
                </h6>
                <p>
                  <a
                    href="https://www.f-secure.com/es/home/free-tools/online-scanner"
                    target="_blank"
                    class="text-reset"
                  >
                    <FaShieldVirus />
                    Escanea tu equipo
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.nperf.com/en/"
                    target="_blank"
                    class="text-reset"
                  >
                    <BsWifi />
                    Escanea tu velocidad
                  </a>
                </p>
                <p>
                  <a
                    href="https://chrome.google.com/webstore/detail/free-vpn-zenmate-best-vpn/fdcgdnkidjaadafnichfpabhfomcebme?hl=es"
                    target="_blank"
                    class="text-reset"
                  >
                    <MdVpnKey />
                    Navega seguro
                  </a>
                </p>

              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 className="text-uppercase fw-bold mb-4">Contáctanos</h6>
                <p><BiMap /> Medellín, Colombia - Bogotá, Colombia</p>
                <p><BsTelephone /> (604) 4480374 </p>
                <p><BsTelephone /> (57) 3207610176 </p>
              </div>

            </div>

          </div>
        </section>

        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2022 Copyright:
        </div>

      </footer>

    </MainContainer>

  )

}

export default Footer;
