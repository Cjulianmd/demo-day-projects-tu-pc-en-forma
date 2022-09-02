

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {PrivateRoutes, PublicRoutes} from '../Components/Modules/IsLogged';
import { useSelector } from 'react-redux';
import LandingPage from '../Components/Pages/LandingPage';
import LogInPage from '../Components/Pages/LogInPage';
import RegisterPage from '../Components/Pages/SingInPage';
import HomePage from '../Components/Pages/HomePage';
import ServicesHomePage from '../Components/Pages/ServicesHomePage';
import PreventiveMaintenancePage from '../Components/Pages/PreventiveMaintenancePage';
import CorrectiveMaintenancePage from '../Components/Pages/CorrectiveMaintenancePage';
import SoftwareUpdatePage from '../Components/Pages/SoftwareUpdatePage';

function AppRoutes() {

  // const logged = useSelector(state => state.userLogIn.isLogged);

  const logged = true;

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path="/login" element={ <LogInPage /> } />
        <Route path="/signin" element={ <RegisterPage /> } />
        <Route path="/home" element={ <HomePage /> } />

        <Route path="/services" element={ <ServicesHomePage /> } />
        <Route path="/preventive" element={ <PreventiveMaintenancePage /> } />
        <Route path="/corrective" element={ <CorrectiveMaintenancePage /> } />
        <Route path="/software" element={ <SoftwareUpdatePage /> } />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )

}

export default AppRoutes;
