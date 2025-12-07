import { useState, useEffect } from 'react';
import DonationList from '../../components/Donations/DonationList';
import DonationsFilters from '../../components/Donations/DonationsFilters';
import { useDonation } from '../../context/DonationContext';
import { api } from '../../api/api';
import './Donations.css';

const Donations = () => {
  const { donations } = useDonation();
  const [shelters, setShelters] = useState([]);
  const [filteredShelters, setFilteredShelters] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    sortOrder: 'asc'
  });

  useEffect(() => {
    const fetchShelters = async () => {
      try {
        const data = await api.getShelters();
        setShelters(data);
        setFilteredShelters(data);
      } catch (error) {
        console.error('Error fetching shelters:', error);
      }
    };
    fetchShelters();
  }, []);

  const applyFilters = () => {
    let filtered = shelters.filter(shelter =>
      shelter.name.toLowerCase().includes(filters.search.toLowerCase())
    );

    filtered.sort((a, b) => {
      if (filters.sortOrder === "asc") return a.name.localeCompare(b.name);
      else return b.name.localeCompare(a.name);
    });

    setFilteredShelters(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [filters, shelters]);

  return (
    <div className="donations-page">
      <h1 className="donations-title">Support Animal Shelters</h1>
      <div className="filters-section">
        <DonationsFilters filters={filters} setFilters={setFilters} />
      </div>
      <DonationList shelters={filteredShelters} />
      {donations.length > 0 && (
        <div className="donation-history">
          <h2>Your Donation History</h2>
          <ul>
            {donations.map(donation => (
              <li key={donation.id}>
                Donated ${donation.amount} to {donation.shelterName} on {new Date(donation.date).toLocaleDateString()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Donations;