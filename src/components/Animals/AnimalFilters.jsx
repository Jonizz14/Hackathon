import './AnimalFilters.css';

const AnimalFilters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFilters({ category: '', minAge: '', maxAge: '', search: '' });
  };

  return (
    <div className="animal-filters">
      <h3>Filters</h3>
      <select name="category" value={filters.category} onChange={handleChange}>
        <option value="">All Categories</option>
        <option value="Dog">Dog</option>
        <option value="Cat">Cat</option>
        <option value="Bird">Bird</option>
        <option value="Rabbit">Rabbit</option>
      </select>
      <select name="minAge" value={filters.minAge} onChange={handleChange}>
        <option value="">Min Age</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="3">3</option>
        <option value="5">5</option>
      </select>
      <select name="maxAge" value={filters.maxAge} onChange={handleChange}>
        <option value="">Max Age</option>
        <option value="1">1</option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
      <button onClick={handleReset}>Reset Filters</button>
    </div>
  );
};

export default AnimalFilters;