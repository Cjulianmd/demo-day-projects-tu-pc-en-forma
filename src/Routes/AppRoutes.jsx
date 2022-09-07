

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {PrivateRoutes, PublicRoutes} from '../Components/Modules/IsLogged';
import { useSelector } from 'react-redux';
import LandingPage from '../Components/Pages/LandingPage';
import LogInPage from '../Components/Pages/login/login';
import RegisterPage from '../Components/Pages/login/create';
import HomePage from '../Components/Pages/HomePage';
import UserProfilePage from '../Components/Pages/UserProfilePage';
import PreventiveMaintenancePage from '../Components/Pages/PreventiveMaintenancePage';
import CorrectiveMaintenancePage from '../Components/Pages/CorrectiveMaintenancePage';
import SoftwareUpdatePage from '../Components/Pages/SoftwareUpdatePage';
import TechnicianPage from '../Components/Pages/TechnicianPage';

function AppRoutes() {

  const logged = useSelector(state => state.userLogIn.isLogged);

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoutes auth={logged}> <LandingPage /> </PublicRoutes>} />
        <Route path="/login" element={<PublicRoutes auth={logged}> <LogInPage /> </PublicRoutes>} />
        <Route path="/signin" element={<PublicRoutes auth={logged}> <RegisterPage /> </PublicRoutes>} />

        <Route path="/home" element={<PrivateRoutes auth={logged}> <HomePage /> </PrivateRoutes>} />
        <Route path="/preventive" element={<PrivateRoutes auth={logged}> <PreventiveMaintenancePage /> </PrivateRoutes>} />
        <Route path="/corrective" element={<PrivateRoutes auth={logged}> <CorrectiveMaintenancePage /> </PrivateRoutes>} />
        <Route path="/software" element={<PrivateRoutes auth={logged}> <SoftwareUpdatePage /> </PrivateRoutes>} />
        <Route path="/tecnico" element={<PrivateRoutes auth={logged}> <TechnicianPage /> </PrivateRoutes>} />
        <Route path="/user" element={<PrivateRoutes auth={logged}> <UserProfilePage /> </PrivateRoutes>} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )

}

export default AppRoutes;
