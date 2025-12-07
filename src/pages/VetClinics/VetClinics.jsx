import { useState, useEffect } from 'react';
import VetMap from '../../components/VetMap/VetMap';
import { api } from '../../api/api';
import './VetClinics.css';

const VetClinics = () => {
  const [clinics, setClinics] = useState([]);
  const [filteredClinics, setFilteredClinics] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    sortOrder: 'asc'
  });

  useEffect(() => {
    const fetchClinics = async () => {
      try {
        const data = await api.getVetClinics();
        setClinics(data);
        setFilteredClinics(data);
      } catch (error) {
        console.error('Error fetching vet clinics:', error);
      }
    };
    fetchClinics();
  }, []);

  const applyFilters = () => {
    let filtered = clinics.filter(clinic =>
      clinic.name.toLowerCase().includes(filters.search.toLowerCase())
    );

    filtered.sort((a, b) => {
      if (filters.sortOrder === "asc") return a.name.localeCompare(b.name);
      else return b.name.localeCompare(a.name);
    });

    setFilteredClinics(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [filters, clinics]);

  return (
    <div className="vet-clinics-page">
      <h1 className="vet-clinics-title">Veterinary Clinics</h1>
      <VetMap />
      <div className="filters-section">
        <div className="vet-filters">
          <input
            type="text"
            placeholder="Search clinics..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="search-input"
          />
          <select
            value={filters.sortOrder}
            onChange={(e) => setFilters({ ...filters, sortOrder: e.target.value })}
            className="sort-select"
          >
            <option value="asc">Sort by Name: A → Z</option>
            <option value="desc">Sort by Name: Z → A</option>
          </select>
        </div>
      </div>
      <div className="clinic-list">
        {filteredClinics.map(clinic => (
          <div key={clinic.id} className="clinic-card">
            <img src={clinic.image} alt={clinic.name} className="clinic-image" />
            <h3>{clinic.name}</h3>
            <p>{clinic.address}</p>
            <p>⭐ 4.8</p>
            <p className="open">Open</p>
            <p className="clinic-description">{clinic.description}</p>
            <button className="details-btn">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VetClinics;
