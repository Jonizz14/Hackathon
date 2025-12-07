import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { api } from '../../api/api';
import 'leaflet/dist/leaflet.css';
import './VetMap.css';

const VetMap = () => {
  const [clinics, setClinics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClinics = async () => {
      try {
        const data = await api.getVetClinics();
        setClinics(data);
      } catch (error) {
        console.error('Error fetching vet clinics:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchClinics();
  }, []);

  if (loading) return <div>Loading map...</div>;

  return (
    <div className="vet-map">
      <MapContainer center={[41.2995, 69.2401]} zoom={12} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {clinics.map(clinic => (
          <Marker key={clinic.id} position={[clinic.lat, clinic.lng]}>
            <Popup>
              <h3>{clinic.name}</h3>
              <p>{clinic.address}</p>
              <p>Phone: {clinic.phone}</p>
              <p>Hours: {clinic.hours}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default VetMap;