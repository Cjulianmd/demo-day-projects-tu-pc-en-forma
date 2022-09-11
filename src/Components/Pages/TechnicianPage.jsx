import React, { useEffect, useState } from "react";
import {
  HelperContainer,
  LandingSections,
  MainContainer,
  TestimoniesContainer,
} from "../../Styles/StylesSebastian";
import Footer from "../Modules/Footer";
import Table from "react-bootstrap/Table";
import { GiClick } from "react-icons/gi";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import {
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  documentId,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../Utils/JulianFirebase";
import "../../Styles/felixCss.css";
import { toast } from "react-toastify";
import SimpleNavBar from "../Modules/SimpleNavBar";
import { useSelector } from "react-redux";

function TechnicianPage() {
  const [citasL, setCitasL] = useState([]);
  const [citasT, setCitasT] = useState([]);
  const tecnico = useSelector(state => state.userLogIn);



  useEffect(() => {
    getDocs(query(collection(db, "Citas"), where('estado', '==', 'creada')))
      .then((response) => {
        let listaCitas = [];
        response.forEach(
          (doc) => {
            listaCitas.push(doc.data());
          },
          [listaCitas]
        );
        setCitasL(listaCitas);
      });

    getDoc(doc(db, "Tecnicos", tecnico.id))
      .then((response) => {

        let dataTecnico = response.data()
        getDocs(query(collection(db, "Citas"), where(documentId(), 'in', dataTecnico.citas)))
          .then((response) => {

            let listaCitas = [];
            response.forEach(
              (doc) => {
                listaCitas.push(doc.data());
              },
              [listaCitas]
            );
            setCitasT(listaCitas);

          })
      });

  }, [setCitasL, setCitasT, tecnico]);

  const escogerCita = (index) => {
    updateDoc(doc(db, "Tecnicos", tecnico.id), {
      citas: arrayUnion(
        citasL[index].DNI
      ),
    })
    .then(() => {
      updateDoc(doc(db, "Citas", citasL[index].DNI), { estado: 'agendada', tecnico: tecnico.name })
        .then(() => {
          let aux = Object.assign([], citasL)
          let temporal = aux.splice(index, 1)
          setCitasL(aux)
          let temporal2 = [...citasT, temporal[0]]
          setCitasT(temporal2)
          toast.success("Cita agregada. ");
        })

    });
  };

  const completarCita = (index) => {
    updateDoc(doc(db, "Tecnicos", tecnico.id), {
      citas: arrayRemove(
        citasT[index].DNI
      )
    })
    .then(() => {
      deleteDoc(doc(db, 'Citas', citasT[index].DNI))
      .then(() => {
        toast.success('Gracias por tu servicio. Datos actualizados.')
      })
    })
  }

  return (
    <>
      <MainContainer>
        <SimpleNavBar />
        <HelperContainer>
          <LandingSections>
            <h1>Citas disponibles.</h1>
            <p style={{ margin: "1.5rem 0" }}>
              Estas son las citas disponibles en el sistema. Elige una:
            </p>
            <TestimoniesContainer>
              <Table
                striped
                bordered
                hover
                size="sm"
                className="react-strap-table table-hover table-header"
              >
                <thead>
                  <tr>
                    <th style={{ width: '3%' }}>#</th>
                    <th style={{ width: '3%' }}>Nombre</th>
                    <th>Apellidos</th>
                    <th>DNI</th>
                    <th>Equipo</th>
                    <th>Teléfono</th>
                    <th>Correo</th>
                    <th>Descripción</th>
                    <th style={{ width: '3%' }}>Fecha</th>
                    <th>Hora</th>
                    <th>Tipo M</th>
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
                        <td>{i.tipo}</td>
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
            </TestimoniesContainer>

            <h1>Citas agendadas.</h1>
            <p style={{ margin: "1.5rem 0" }}>
              {tecnico.name}, estas son tus citas agendadas en el sistema.
            </p>
            <TestimoniesContainer>
              <Table
                className="react-strap-table table-hover table-header"
                striped
                bordered
                hover
                size="sm" >
                <thead>
                  <tr>
                    <th style={{ width: '2%' }}>Cita</th>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>DNI</th>
                    <th>Equipo</th>
                    <th>Teléfono</th>
                    <th>Correo</th>
                    <th>Descripción</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Tipo M</th>
                    <th style={{ width: '3%' }}>Completado</th>
                  </tr>
                </thead>
                <tbody>
                  {citasT.map((c, index, citasT) => {
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
                        <td>{c.tipo}</td>
                        <td><BsFillBookmarkCheckFill
                          onClick={() => completarCita(index)}
                          style={{
                            cursor: "pointer",
                            fontSize: "1.5rem",
                            color: "#675cb0",
                          }} /></td>
                      </tr>
                    );
                  })}


                </tbody>
              </Table>
            </TestimoniesContainer>

          </LandingSections>
        </HelperContainer>
      </MainContainer>
      <Footer />
    </>
  );
}

export default TechnicianPage;
