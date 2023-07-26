import { response } from 'express';
import React, { useEffect, useState } from 'react';

interface UserPageProps {
  token: string;
  firstName: string;
  lastName: string;
}

interface Doctor {
  id: number;
  lastName: string;
  firstName: string;
}

const UserPage: React.FC<UserPageProps> = (props) => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
  const [idUser, setIdUser] = useState<number | null>(null);

  useEffect(() => {
    const datta = {
      firstName: props.firstName,
      lastName: props.lastName,
    };

    const fetchData = async () => {
      try {
        // Fetch doctors
        const responseDoctors = await fetch('http://localhost:8080/api/v1/auth/doctors', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${props.token}`,
            'Content-Type': 'application/json',
          },
        });

        if (responseDoctors.ok) {
          const data = await responseDoctors.json();
          setDoctors(data);
        } else {
          throw new Error('Failed to fetch doctors');
        }

        // Fetch user ID
        const responseId = await fetch('http://localhost:8080/api/v1/auth/getid', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${props.token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(datta),
        });

        if (responseId.ok) {
          const responseData = await responseId.text(); // Získame textovú odpoveď
          setIdUser(Number(responseData)); // Nastavíme ID do state
        } else {
          throw new Error('Login failed');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, [props.token, props.firstName, props.lastName]);

  const handleDoctorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(event.target.value);
    setSelectedDoctor(selectedId);
  };

  useEffect(() => {
    if (idUser !== null) {
      console.log('ID User:', idUser);
    }
  }, [idUser]);

  return (
    <div>
      <h1>User Page</h1>
      <div>
        <label htmlFor="doctorSelect">Select a Doctor:</label>
        <select id="doctorSelect" value={selectedDoctor || ''} onChange={handleDoctorChange}>
          <option value="">-- Select a Doctor --</option>
          {doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>
              {doctor.lastName + ' ' + doctor.firstName}
            </option>
          ))}
        </select>
      </div>
      {idUser !== null && (
        <div>
          <h2>Selected Doctor:</h2>
          <p>
            {doctors.find((doctor) => doctor.id === selectedDoctor)?.firstName +
              ' ' +
              doctors.find((doctor) => doctor.id === selectedDoctor)?.lastName}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserPage;
