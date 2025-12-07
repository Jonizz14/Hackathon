import { useState, useEffect } from 'react';
import FreeGiveFilters from '../../components/FreeGive/FreeGiveFilters';
import FreeGiveList from '../../components/FreeGive/FreeGiveList';
import { api } from '../../api/api';
import './FreeGive.css';

const FreeGive = () => {
  const [freeAnimals, setFreeAnimals] = useState([]);
  const [filteredFreeAnimals, setFilteredFreeAnimals] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    minAge: '',
    maxAge: '',
    search: ''
  });

  useEffect(() => {
    const fetchFreeAnimals = async () => {
      try {
        const data = await api.getFreeAnimals();
        setFreeAnimals(data);
        setFilteredFreeAnimals(data);
      } catch (error) {
        console.error('Error fetching free animals:', error);
      }
    };
    fetchFreeAnimals();
  }, []);

  const applyFilters = () => {
    let filtered = freeAnimals;

    if (filters.search) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.category) {
      filtered = filtered.filter(item => item.category === filters.category);
    }

    if (filters.minAge) {
      filtered = filtered.filter(item => item.age >= parseInt(filters.minAge));
    }

    if (filters.maxAge) {
      filtered = filtered.filter(item => item.age <= parseInt(filters.maxAge));
    }

    setFilteredFreeAnimals(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [filters, freeAnimals]);

  return (
    <div className="free-give-page">
      <h1 className="free-give-title">Free Animals</h1>
      <div className="filters-section">
        <FreeGiveFilters filters={filters} setFilters={setFilters} />
      </div>
      <FreeGiveList freeAnimals={filteredFreeAnimals} />
    </div>
  );
};

export default FreeGive;