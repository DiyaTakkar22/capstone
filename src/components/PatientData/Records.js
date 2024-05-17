import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Records = () => {
  const [record, setRecord] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/ibm-patient/records/6645b7f318de36a2aefa9b2`);
        setRecord(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Patient Record</h2>
      <div>
        <p>Patient ID: {record.recordId}</p>
        {/* <p>Name: {record.name}</p>
        <p>Age: {record.age}</p> */}
        {/* Add more fields as needed */}
      </div>
    </div>
  );
};

export default Records;
