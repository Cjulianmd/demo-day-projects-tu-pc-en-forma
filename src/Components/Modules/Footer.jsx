//! Sebastian


import React from 'react';
import { MainContainer } from '../../Styles/StylesSebastian';

function Footer() {

  return (

    <MainContainer>

      <footer class="text-center text-lg-start bg-light text-muted">
        
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          
          <div class="me-5 d-none d-lg-block">
            <span>Conéctate con nosotros:</span>
          </div>
          

          <div>
            <a href="https://www.facebook.com/profile.php?id=100071024058004" class="me-4 text-reset">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/geek_colombia" class="me-4 text-reset">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/laacademiageek/?hl=es" class="me-4 text-reset">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/academia-geek-bootcamp/?originalSubdomain=co" class="me-4 text-reset">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/academia-geek" class="me-4 text-reset">
              <i class="fab fa-github"></i>
            </a>
          </div>

        </section>

        <section class="">
          <div class="container text-center text-md-start mt-5">

            <div class="row mt-3">

              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>Tu PC en Forma
                </h6>
                <p>
                  Somos tu mejor aliado a la hora de tener tu equipo de cómputo en forma para afrontar los mejores retos y puedas ganar por goleada.
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 class="text-uppercase fw-bold mb-4">
                  Servicios
                </h6>
                <p>
                  <a href="#!" class="text-reset">Mantenimiento preventivo</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Mantenimiento correctivo</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Actualización de software</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Compra de hardware</a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 class="text-uppercase fw-bold mb-4">Contáctanos</h6>
                <p><i class="fas fa-home me-3"></i> Medellín, Antioquia, Colombia - Bogotá, Cundinamarca, Colombia</p>
                <p><i class="fas fa-phone me-3"></i> (604) 4480374 </p>
                <p><i class="fas fa-print me-3"></i> (57) 3207610176 </p>
              </div>

            </div>

          </div>
        </section>

        <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
          © 2022 Copyright:
        </div>

      </footer>

    </MainContainer>

  )

}

export default Footer;
