import { useState, useEffect } from 'react';
import EquipList from '../../components/Equipment/EquipList';
import EquipmentsFilters from '../../components/Equipment/EquipmentsFilters';
import { api } from '../../api/api';
import './Equipments.css';

const Equipments = () => {
  const [equipments, setEquipments] = useState([]);
  const [filteredEquipments, setFilteredEquipments] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    minPrice: '',
    maxPrice: '',
    search: ''
  });

  useEffect(() => {
    const fetchEquipments = async () => {
      try {
        const data = await api.getEquipments();
        setEquipments(data);
        setFilteredEquipments(data);
      } catch (error) {
        console.error('Error fetching equipments:', error);
      }
    };
    fetchEquipments();
  }, []);

  const applyFilters = () => {
    let filtered = equipments;

    if (filters.search) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.category) {
      filtered = filtered.filter(item => item.category === filters.category);
    }

    if (filters.minPrice) {
      filtered = filtered.filter(item => item.price >= parseInt(filters.minPrice));
    }

    if (filters.maxPrice) {
      filtered = filtered.filter(item => item.price <= parseInt(filters.maxPrice));
    }

    setFilteredEquipments(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [filters, equipments]);

  return (
    <div className="equipments-page">
      <h1 className="equipments-title">Pet Equipment</h1>
      <div className="filters-section">
        <EquipmentsFilters filters={filters} setFilters={setFilters} />
      </div>
      <EquipList equipments={filteredEquipments} />
    </div>
  );
};

export default Equipments;