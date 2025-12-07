import { useState } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import './AnimalFilters.css';

const AnimalFilters = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    category: '',
    minAge: '',
    maxAge: '',
    search: ''
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleFilter = () => {
    onFilter(filters);
  };

  const handleReset = () => {
    setFilters({ category: '', minAge: '', maxAge: '', search: '' });
    onFilter({});
  };

  return (
    <div className="animal-filters">
      <Input
        label="Search by name"
        name="search"
        value={filters.search}
        onChange={handleChange}
        placeholder="Enter animal name"
      />
      <Input
        label="Category"
        name="category"
        value={filters.category}
        onChange={handleChange}
        placeholder="e.g., Dog, Cat"
      />
      <Input
        label="Min Age"
        name="minAge"
        type="number"
        value={filters.minAge}
        onChange={handleChange}
      />
      <Input
        label="Max Age"
        name="maxAge"
        type="number"
        value={filters.maxAge}
        onChange={handleChange}
      />
      <Button onClick={handleFilter}>Apply Filters</Button>
      <Button onClick={handleReset}>Reset</Button>
    </div>
  );
};

export default AnimalFilters;