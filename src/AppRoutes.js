import React from 'react';
import Login from './components/Login/Login.js';
import { Routes ,Route,BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js';
import Appointments from './components/Appointments/Appointments.js';
import PatientForm from './components/PatientData/PatientForm';


export default function AppRoutes() {
  return (
    <div>
        <BrowserRouter>
                
                <Navbar/>
                <Routes>
               
                    <Route path="/login" element={<Login/>} />
                    <Route path="/appointments" element={<Appointments/>} />
                    <Route path="/data" element={<PatientForm/>} />
                   
                </Routes>
             
            </BrowserRouter>
    </div>
  )
}
