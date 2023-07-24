import React, { useEffect, useState } from 'react';

interface UserPageProps {
  token: string;
}

interface Doctor {
  id: number;
  firstName: string;
  lastName: string;
}

const UserPage: React.FC<UserPageProps> = (props) => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/auth/doctors', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${props.token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setDoctors(data);
        } else {
          throw new Error('Request failed');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchDoctors();
  }, [props.token]);

  const handleDoctorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(event.target.value);
    setSelectedDoctor(selectedId);
  };

  return (
    <div>
      <h1>User Page</h1>
      <div>
        <label htmlFor="doctorSelect">Select a Doctor:</label>
        <select id="doctorSelect" value={selectedDoctor || ''} onChange={handleDoctorChange}>
          <option value="">-- Select a Doctor --</option>
          {doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>
              {doctor.firstName+' '+doctor.lastName}
            </option>
          ))}
        </select>
      </div>
      {selectedDoctor && (
        <div>
          <h2>Selected Doctor:</h2>
          <p>{doctors.find((doctor) => doctor.id === selectedDoctor)?.firstName + ' ' + doctors.find((doctor) => doctor.id === selectedDoctor)?.lastName}</p>
        </div>
      )}
    </div>
  );
};

export default UserPage;
