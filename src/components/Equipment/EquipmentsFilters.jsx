import './EquipmentsFilters.css';

const EquipmentsFilters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFilters({ category: '', minPrice: '', maxPrice: '', search: '' });
  };

  return (
    <div className="equipments-filters">
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
        <option value="Food">Food</option>
        <option value="Toy">Toy</option>
        <option value="Bed">Bed</option>
        <option value="Cage">Cage</option>
        <option value="Tank">Tank</option>
        <option value="Accessory">Accessory</option>
        <option value="Care">Care</option>
      </select>
      <input
        type="number"
        name="minPrice"
        placeholder="Min Price"
        value={filters.minPrice}
        onChange={handleChange}
        className="price-input"
      />
      <input
        type="number"
        name="maxPrice"
        placeholder="Max Price"
        value={filters.maxPrice}
        onChange={handleChange}
        className="price-input"
      />
      <button onClick={handleReset}>Reset Filters</button>
    </div>
  );
};

export default EquipmentsFilters;