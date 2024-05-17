import React from 'react';
import Login from './components/Login/Login.js';
import { Routes ,Route,BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js';
import Appointments from './components/Appointments/Appointments.js';
import Records from './components/PatientData/Records.js';
import Payment from './components/payment/Payment.js';


export default function AppRoutes() {
  return (
    <div>
        <BrowserRouter>
                
                <Navbar/>
                <Routes>
               
                    <Route path="/login" element={<Login/>} />
                    <Route path="/appointments" element={<Appointments/>} />
                    <Route path="/data" element={<Records/>} />
                    <Route path="/payment" element={<Payment/>} />
                   
                </Routes>
             
            </BrowserRouter>
    </div>
  )
}
