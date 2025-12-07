import './FosterFilters.css';

const FosterFilters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFilters({ category: '', minAge: '', maxAge: '', search: '' });
  };

  return (
    <div className="foster-filters">
      <h3>Filters</h3>
      <input
        type="text"
        placeholder="Search by name"
        value={filters.search}
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        className="search-input"
      />
      <select name="category" value={filters.category} onChange={handleChange}>
        <option value="">All Categories</option>
        <option value="Dog">Dog</option>
        <option value="Cat">Cat</option>
      </select>
      <select name="minAge" value={filters.minAge} onChange={handleChange}>
        <option value="">Min Age</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <select name="maxAge" value={filters.maxAge} onChange={handleChange}>
        <option value="">Max Age</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="5">5</option>
      </select>
      <button onClick={handleReset}>Reset Filters</button>
    </div>
  );
};

export default FosterFilters;