import { useState, useEffect } from 'react';
import FosterList from '../../components/Foster/FosterList';
import FosterFilters from '../../components/Foster/FosterFilters';
import { api } from '../../api/api';
import './Foster.css';

const Foster = () => {
  const [foster, setFoster] = useState([]);
  const [filteredFoster, setFilteredFoster] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    minAge: '',
    maxAge: '',
    search: ''
  });

  useEffect(() => {
    const fetchFoster = async () => {
      try {
        const data = await api.getFoster();
        setFoster(data);
        setFilteredFoster(data);
      } catch (error) {
        console.error('Error fetching foster animals:', error);
      }
    };
    fetchFoster();
  }, []);

  const applyFilters = () => {
    let filtered = foster;

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

    setFilteredFoster(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [filters, foster]);

  return (
    <div className="foster-page">
      <h1 className="foster-title">Foster Animals</h1>
      <div className="filters-section">
        <FosterFilters filters={filters} setFilters={setFilters} />
      </div>
      <FosterList foster={filteredFoster} />
    </div>
  );
};

export default Foster;