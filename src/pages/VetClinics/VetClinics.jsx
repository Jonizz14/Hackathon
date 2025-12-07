import VetMap from '../../components/VetMap/VetMap';
import './VetClinics.css';

const VetClinics = () => {
  return (
    <div className="vet-clinics-page">
      <h1>Veterinary Clinics</h1>
      <p>Find nearby veterinary clinics on the map.</p>
      <VetMap />
    </div>
  );
};

export default VetClinics;