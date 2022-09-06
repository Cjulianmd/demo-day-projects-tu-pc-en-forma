import React, { useEffect, useState } from "react";
import {
  HelperContainer,
  LandingSections,
  MainContainer,
} from "../../Styles/StylesSebastian";
import Footer from "../Modules/Footer";
import NavBar from "../Modules/NavBar";
import Table from "react-bootstrap/Table";
import { GiClick } from "react-icons/gi";
import { collection,getDocs } from "firebase/firestore";
import { db } from "../../Utils/JulianFirebase";

function TechnicianPage() {
  const [citasL, setCitasL] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "Citas")).then((response) => {
      let listaCitas = [];
      response.forEach(
        (doc) => {
          listaCitas.push(doc.data());
        },
        [listaCitas]
      );
      setCitasL(listaCitas);
      console.log(listaCitas);
    });
  }, [setCitasL]);

  return (
    <>
      <MainContainer>
        <NavBar />
        <HelperContainer>
          <LandingSections>
            <h1>Citas disponibles.</h1>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Apellidos</th>
                  <th>DNI</th>
                  <th>Equipo</th>
                  <th>Teléfono</th>
                  <th>Correo</th>
                  <th>Descripción</th>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Agendar</th>
                </tr>
              </thead>
              <tbody>
                {citasL.map((i, index, citasL) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{i.name}</td>
                      <td>{i.apellidos}</td>
                      <td>{i.DNI}</td>
                      <td>{i.equipo}</td>
                      <td>{i.telefono}</td>
                      <td>{i.correo}</td>
                      <td>{i.descripcion}</td>
                      <td>{i.fecha}</td>
                      <td>{i.hora}</td>
                      <td>
                        <GiClick />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>

            <h1>Citas agendadas.</h1>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </LandingSections>
        </HelperContainer>
      </MainContainer>
      <Footer />
    </>
  );
}

export default TechnicianPage;
