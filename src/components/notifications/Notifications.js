import React, { useState, useEffect } from 'react';
import { useRef } from 'react';

const Notification = ({id}) => {
  const [appointmentDetails, setAppointmentDetails] = useState(null);
  


  useEffect(() => {
    const fetchAppointmentDetails = async () => {
      try {
        const response = await fetch(`http://localhost:9002/ibm-appointment/appointments/${id}`);
        const data = await response.json();
        setAppointmentDetails(data); // Update appointment details state with fetched data
      } catch (error) {
        console.error('Error fetching appointment details:', error);
      }
    };

    if (id) {
      fetchAppointmentDetails();
    }

  
  }, []);
  
  return (
    <div className="notification">
      <h3>Appointment Details</h3>
      {appointmentDetails ? (
        <div>
          <p><strong>Date:</strong> {appointmentDetails.date}</p>
          <p><strong>Doctor:</strong> {appointmentDetails.doctorName}</p>
          <p><strong>Slot:</strong> {appointmentDetails.slot}</p>
          <p><strong>Patient:</strong> {appointmentDetails.patientId}</p>
        </div>
      ) : (
        <p>Loading appointment details...</p>
      )}
    </div>
  );
  
};

export default Notification;

// import React, { useState, useEffect } from 'react';
// import { FaBell } from 'react-icons/fa'; // Importing the bell icon from react-icons

// const Notification = ({ id }) => {
//   const [appointmentDetails, setAppointmentDetails] = useState(null);

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         const response = await fetch(`http://localhost:9002/ibm-appointment/appointments/${id}`);
//         const data = await response.json();
//         setAppointmentDetails(data);
//         console.log(data);
//       } catch (error) {
//         console.error('Error fetching appointments:', error);
//       }
//     };

//     fetchAppointments();
//   }, [id]); // Include id in the dependency array to trigger the effect when id changes

//   return (
//     <div className="notification-container">
//       <div className="card">
//         <div className="card-header">
//           <FaBell className="notification-icon" />
//           <h5 className="card-title">Appointment Details</h5>
//         </div>
//         <div className="card-body">
//           {appointmentDetails ? (
//             <div>
//               <p><strong>Date:</strong> {appointmentDetails.date}</p>
//               <p><strong>Doctor:</strong> {appointmentDetails.doctorId}</p>
//               <p><strong>Slot:</strong> {appointmentDetails.slot}</p>
//               <p><strong>Patient:</strong> {appointmentDetails.patientId}</p>
//             </div>
//           ) : (
//             <p>Loading appointment details...</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Notification;

