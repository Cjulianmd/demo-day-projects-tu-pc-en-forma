//! Sebastian


import React from 'react';
import { MainContainer } from '../../Styles/StylesSebastian';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Footer() {

  return (

    <MainContainer>

      {/* <!-- Footer --> */}
      <footer class="text-center text-lg-start bg-light text-muted">
        {/* <!-- Section: Social media --> */}
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* <!-- Left --> */}
          <div class="me-5 d-none d-lg-block">
            <span>Conéctate con nosotros:</span>
          </div>
          {/* <!-- Left --> */}

          {/* <!-- Right --> */}
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
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section class="">
          <div class="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div class="row mt-3">
              {/* <!-- Grid column --> */}
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>Tu PC en Forma
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
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
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 class="text-uppercase fw-bold mb-4">Contáctanos</h6>
                <p><i class="fas fa-home me-3"></i> Medellín, Antioquia, Colombia - Bogotá, Cundinamarca, Colombia</p>
                <p><i class="fas fa-phone me-3"></i> (604) 4480374 </p>
                <p><i class="fas fa-print me-3"></i> (57) 3207610176 </p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
          © 2022 Copyright:
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}

    </MainContainer>

  )

}

export default Footer;