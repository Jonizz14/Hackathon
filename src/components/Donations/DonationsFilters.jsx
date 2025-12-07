import './DonationsFilters.css';

const DonationsFilters = ({ filters, setFilters }) => {
  return (
    <div className="donations-filters">
      <input
        type="text"
        placeholder="Search shelters..."
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
  );
};

export default DonationsFilters;