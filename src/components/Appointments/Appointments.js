
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Notification from '../notifications/Notifications';


const Appointments = () => {
  // State variables
  const [appointmentId, setAppointmentId] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [message, setMessage] = useState('');
  const [patientId, setPatientId] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [patientEmail, setPatientEmail] = useState('');
  const [isLoading, setIsLoading] = useState(true); // State for loading indicator
  const [doctorName, setDoctorName] = useState('');

  // Fetch doctors list when the component mounts
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('http://localhost:9003/ibm-doctor/doctors');
        const data = await response.json();
        console.log(data);
        setDoctors(data); // Update state with fetched doctors list
        setDoctorName(data[0].name)
        setIsLoading(false); // Update loading state
      } catch (error) {
        console.error('Error fetching doctors:', error);
        setIsLoading(false); // Update loading state
      }
    };

    fetchDoctors();
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  const handleAppointmentSubmit = async (e) => {
    e.preventDefault();


    try {
      // Find the selected doctor object from the doctors array
      const selectedDoctorObject = doctors.find(doctor => doctor.doctorId === selectedDoctor);
      const appointmentData = {
        appointmentId: appointmentId,
        doctorId: selectedDoctor,
        doctorName: selectedDoctorObject.name,
        patientId: patientId,
        date: selectedDate,
        slot: selectedSlot,
        patientEmail: patientEmail

      };

      const response = await fetch('http://localhost:9002/ibm-appointment/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData), // Convert data to JSON
      });

      const data = await response.json();


      setMessage(data.message);
      setAppointmentId(data.appointmentId);
      setDoctorName(selectedDoctorObject.name);
      setSelectedDoctor('');
      setSelectedDate('');
      setSelectedSlot('');
      setPatientId('');
      setPatientEmail('');
      // Clear form fields after successful submission
      setAppointmentId('');
      setPatientId('');
      setPatientEmail('');
      try {
        const response = await fetch('http://localhost:9002/ibm-appointment/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(), // Send patient email for notification
        });

        if (!response.ok) {
          console.error('Failed to send email notification.');
        }
      } catch (error) {
        console.error('Error sending email notification:', error);
      }
    } catch (error) {
      // console.error('Error booking appointment:', error);
      // setMessage('Error booking appointment. Please try again later.');
    }
  };



  return (
    <div className="container">
      <h2 className="my-4">Book Appointment</h2>
      <form onSubmit={handleAppointmentSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={appointmentId}
            onChange={(e) => setAppointmentId(e.target.value)}
            placeholder="Appointment Reason in detail"
          />
        </div>
        <div className="form-group">
          <select
            className="form-control"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
          >
            <option value="" disabled>Select Doctor</option>
            {isLoading ? (
              <option disabled>Loading...</option>
            ) : (
              doctors.map(doctor => (
                <option key={doctor.doctorId} value={doctor.doctorId}>{doctor.name}</option>
              ))
            )}
          </select>
        </div>
        <div className="form-group">
          <input className="form-control" type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} placeholder="Date" />
        </div>
        <div className="form-group">
          <input className="form-control" type="text" value={selectedSlot} onChange={(e) => setSelectedSlot(e.target.value)} placeholder="Slot" />
        </div>
        <div className="form-group">
          <input className="form-control" type="text" value={patientId} onChange={(e) => setPatientId(e.target.value)} placeholder="Patient ID" />
        </div>
        <div className="form-group">
          <input className="form-control" type="text" value={patientEmail} onChange={(e) => setPatientEmail(e.target.value)} placeholder="email id" />
        </div>
        <button type="submit" className="btn btn-primary">Book Appointment</button>
      </form>
      {message && <p className="message">{message}</p>}
      {appointmentId && <Notification id={appointmentId} />} {/* Render Notification component only when appointmentId is available */}


    </div>
  );
};

export default Appointments;


