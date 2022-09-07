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
import {BsFillBookmarkCheckFill  } from "react-icons/bs";
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../Utils/JulianFirebase";
import "../../Styles/felixCss.css";
import { toast } from "react-toastify";

function TechnicianPage() {
  const [citasL, setCitasL] = useState([]);
  const [state, setstate] = useState(initialState)


  useEffect(() => {
    getDocs(collection(db, "Citas"), where('estado', '==', 'creada'))
    .then((response) => {
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


    getDocs(query(db, "Tecnicos", '1230'))
    .then((resp) => {
        setReserva(resp)     
      });

  }, [setCitasL]);






  const escogerCita = (index
  
  ) => {
    updateDoc(doc(db, "Tecnicos", "1230"), {
      citas: arrayUnion(
        citasL[index].DNI
      ),
    }).then(() => {
        updateDoc(doc(db, "Citas", citasL[index].DNI ), {estado:'agendada', tecnico: 'name'})
        .then(()=>{
            let aux = Object.assign([], citasL)
            aux.splice(index, 1)
            setCitasL(aux)
            toast.success("Cita agregada. ");
        })
   
    });
  };

  return (
    <>
      <MainContainer>
        <NavBar />
        <HelperContainer>
          <LandingSections>
            <h1>Citas disponibles.</h1>
            <p style={{ margin: "1.5rem 0" }}>
              Estas son las citas disponibles en el sistema. Elige una:
            </p>
            <Table
              striped
              bordered
              hover
              size="sm"
              className="react-strap-table"
            >
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
                        <GiClick
                          style={{
                            cursor: "pointer",
                            fontSize: "1.5rem",
                            color: "#675cb0",
                          }}
                          onClick={() =>
                            escogerCita(
                            index
                            )
                          }
                        />
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
                  <th>Cita</th>
                  <th>Nombre</th>
                  <th>Apellidos</th>
                  <th>DNI</th>
                  <th>Equipo</th>
                  <th>Teléfono</th>
                  <th>Correo</th>
                  <th>Descripción</th>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Completado</th>
                </tr>
              </thead>
              <tbody>
               {reserva.citas.map((c, index, citas) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{c.name}</td>
                      <td>{c.apellidos}</td>
                      <td>{c.DNI}</td>
                      <td>{c.equipo}</td>
                      <td>{c.telefono}</td>
                      <td>{c.correo}</td>
                      <td>{c.descripcion}</td>
                      <td>{c.fecha}</td>
                      <td>{c.hora}</td>
                      <td><BsFillBookmarkCheckFill/></td>
                    </tr>
                  );
                })}

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
