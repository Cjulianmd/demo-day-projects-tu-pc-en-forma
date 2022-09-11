// import { useEffect, useState } from 'react'
// import { LinkBox, Button, WrapItem, Stack, Center } from '@chakra-ui/react';
// import React from 'react';
// import { db } from '../../Utils/JulianFirebase';
// import { useForm } from './../../Hooks/useForm';
// import {
//     Table,
//     Tbody,
//     Tr,
//     Td,
//     TableCaption,
//     TableContainer,
//   } from '@chakra-ui/react'
//   import { collection, query, onSnapshot,  doc, deleteDoc, getDoc, setDoc, addDoc, where } from "firebase/firestore";
//   import {
//       Drawer,
//       DrawerBody,
//       DrawerFooter,
//       DrawerHeader,
//       DrawerOverlay,
//       DrawerContent,
//       DrawerCloseButton,
//       Box
//     } from '@chakra-ui/react'
// import {
//   Input,Text,
//   useDisclosure,
//   } from '@chakra-ui/react'
//   import {
//     Accordion,
//     AccordionItem,
//     AccordionButton,
//     AccordionPanel,
//     AccordionIcon,
//   } from '@chakra-ui/react'
// function Mentores() {
//     const { isOpen, onOpen, onClose } = useDisclosure()
//     const btnRef = React.useRef()
//     const valorInicial = {
//         name: '',
//         apellido: '',
//         información_de_contacto:'',
//         programa_académico: '',
//         semestre: '',
//         cedula: '',
//     }

//     const [formValue, handleInputChange] = useForm({
//         busqueda: '',
//         apellido: '',
//         programa_académico: '',
//         semestre: '',
//         cedula: '',
//     })
    


//     const [products, setProducts] = useState([])
//     const [subId, setSubId] = useState('')
//     const [user, setUser] = useState(valorInicial)
//     const citiesRef = query(collection(db, "agenda_mantenimiento"))
//     //q
//     let q;
//     q = query(citiesRef, );
//     //filtro  
//     //const filters = () => {
//         if (formValue.busqueda == "" && formValue.apellido == "" && formValue.programa_académico == "" && formValue.semestre == "" && formValue.cedula == "") {
//             q = query(citiesRef,)
//             }else if (formValue.busqueda !== "" && formValue.apellido == '' && formValue.programa_académico == "" && formValue.semestre == "" && formValue.cedula == "") {
//                 q = query(citiesRef, where("name", "==", formValue.busqueda))
//                 }else if (formValue.busqueda == "" && formValue.apellido !== '' && formValue.programa_académico == "" && formValue.semestre == "" && formValue.cedula == "") {
//                     q = query(citiesRef, where("apellido", "==", formValue.apellido))
//                     }else if (formValue.busqueda == "" && formValue.apellido == '' && formValue.programa_académico !== "" && formValue.semestre == "" && formValue.cedula == "") {
//                         q = query(citiesRef, where("programa_académico", "==", formValue.programa_académico))
//                         }else if (formValue.busqueda == "" && formValue.apellido == '' && formValue.programa_académico == "" && formValue.semestre !== "" && formValue.cedula == "") {
//                             q = query(citiesRef, where("semestre", "==", formValue.semestre))
//                             }else if (formValue.busqueda == "" && formValue.apellido == '' && formValue.programa_académico == "" && formValue.semestre == "" && formValue.cedula !== "") {
//                                 q = query(citiesRef, where("cedula", "==", formValue.cedula))
//                             }
//         if (formValue.busqueda !== "" && formValue.apellido !== '' && formValue.programa_académico !== "" && formValue.semestre !== "" && formValue.cedula !== "") {
//                                 q = query(citiesRef,where("name", "==", formValue.busqueda),where("apellido", "==", formValue.apellido),where("programa_académico", "==", formValue.programa_académico),where("semestre", "==", formValue.semestre), where("cedula", "==", formValue.cedula))
//         }
//         if (formValue.busqueda !== "" && formValue.apellido !== ''){
//             q = query(citiesRef, where("name", "==", formValue.busqueda),where("apellido", "==", formValue.apellido))
//         }
           
        
//     //unsubscribe()}

//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//         const docs = []
//         //const cities = []
//         querySnapshot.forEach((doc) => {
//             //cities.push(doc.data());
//             docs.push({...doc.data(), id: doc.id})
//         });
//         setProducts(docs)
//     });



//     const deleteMonitor = async(id) => {
//         await deleteDoc(doc(db, "agenda_mantenimiento", id));
//     }


//     const capturarInputs = (e)=>{
//         const {name, value} = e.target
//         setUser({...user, [name]: value})
//     }
//     const ActualizarMentor = async(id) => {
//         try {
//             const docRef = doc(db, 'agenda_mantenimiento', id)
//             const docSnap = await getDoc(docRef)
//             setUser(docSnap.data())
//         } catch (error) {
           
//         }
//     }
//     useEffect(()=>{
//         if(subId !== ''){
//             ActualizarMentor(subId)
//         }
//     },[subId])

//     const guardarInfo = async(e)=>{
//         e.preventDefault()
//         if(subId === ''){
//             try {
//                 await addDoc(collection(db,'agenda_mantenimiento'),{
//                     ...user
//                 })
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         else{
//             await setDoc(doc(db, 'agenda_mantenimiento', subId),{
//                 ...user
//             })
//         }
        

//         setUser({...valorInicial})
//         setSubId('')
//     }
//     return (
        
//         <>
//         <Accordion width='500px'>
//             <AccordionItem>
//                 <h2>
//                 <AccordionButton>
//                     <Box color='black' flex='1' textAlign='left'>
//                      Fliltro (presione aqui)
//                     </Box>
//                     <AccordionIcon />
//                 </AccordionButton>
//                 </h2>
//                 <AccordionPanel pb={4}>
//                     <Input color='black' htmlSize={50} width='auto' placeholder='nombre' onChange={handleInputChange} value={formValue.busqueda} id="busqueda" name="busqueda" type="text" />
//                     <Input color='black' htmlSize={50} width='auto' placeholder='apellido' onChange={handleInputChange} value={formValue.apellido} id="apellido" name="apellido" type="text" />
//                     <Input color='black' htmlSize={50} width='auto' placeholder='programa_académico' onChange={handleInputChange} value={formValue.programa_académico} id="programa_académico" name="programa_académico" type="text" />
//                     <Input color='black' htmlSize={50} width='auto' placeholder='semestre' onChange={handleInputChange} value={formValue.semestre} id="semestre" name="semestre" type="number" />
//                     <Input color='black' htmlSize={50} width='auto' placeholder='cedula' onChange={handleInputChange} value={formValue.cedula} id="cedula" name="cedula" type="number" /> 
//                 </AccordionPanel>
//             </AccordionItem>
//         </Accordion>
//         <><br/>
//             {products.map(({name,Direccion,cedula,información_de_contacto,apellido,description,equipo,id}) => (
//                 <LinkBox key={id} valueas='article' maxW='90%' p='3' borderWidth='1px' rounded='md'>
//                 <Accordion>
//                 <AccordionItem>
//                 <h2>
//                     <AccordionButton>
//                     <Box flex='1' textAlign='left'>
//                        cliente: {name}<br/>equipo: {equipo}<br/>información de contacto: {información_de_contacto}
//                     </Box>
//                     <AccordionIcon />
//                     </AccordionButton>
//                 </h2>
//                 <AccordionPanel pb={4}>
//                     {description}
//                 <Stack direction='row' spacing={4}>
//                 <WrapItem >
//                 <Button onClick={()=>deleteMonitor(id)} colorScheme='red' >Delete</Button>
//                 </WrapItem>
//                 <WrapItem onClick={onOpen}>
//                 <Button ref={btnRef} onClick={()=>setSubId(id)} colorScheme='green' variant='solid'>
//                     actualizar
//                 </Button>
//                 </WrapItem>
//                 </Stack>
//                 </AccordionPanel>
//                 </AccordionItem>
//                 </Accordion>
//                 <Drawer
//                 isOpen={isOpen}
//                 placement='right'
//                 onClose={onClose}
//                 finalFocusRef={btnRef}
//                 >
//                 <DrawerOverlay />
//                 <DrawerContent>
//                     <DrawerCloseButton />
//                     <DrawerHeader>actualizar</DrawerHeader>
        
//                     <DrawerBody>
//                     <Input placeholder='nombre' onChange={capturarInputs} value={user.name} id="name" name="name" type="text" />
//                     <Input placeholder='apellido' onChange={capturarInputs} value={user.apellido} id="apellido" name="apellido" type="text" />
//                     <Input placeholder='información_de_contacto' onChange={capturarInputs} value={user.información_de_contacto} id="información_de_contacto" name="información_de_contacto" type="text" />
//                     <Input placeholder='semestre' onChange={capturarInputs} value={user.Direccion} id="semestre" name="semestre" type="number" />
//                     <Input placeholder='cedula' onChange={capturarInputs} value={user.cedula} id="cedula" name="cedula" type="number" /> 
//                     </DrawerBody>
        
//                     <DrawerFooter onClick={onClose}>
//                     <Button variant='outline' mr={3} >
//                         Cancel
//                     </Button>
//                     <Button onClick={guardarInfo} colorScheme='blue'>Save</Button>
//                     </DrawerFooter>
//                 </DrawerContent>
//                 </Drawer>
//             </LinkBox>
            
//             )
//         )}<br/>
//             </>
//         </>
//     );
    
// }

// export default Mentores;