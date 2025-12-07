import { useState, useEffect } from 'react';
import DonationCard from './DonationCard';
import { api } from '../../api/api';
import './DonationList.css';

const DonationList = () => {
  const [shelters, setShelters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShelters = async () => {
      try {
        const data = await api.getShelters();
        setShelters(data);
      } catch (error) {
        console.error('Error fetching shelters:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchShelters();
  }, []);

  if (loading) {
    return <div>Loading shelters...</div>;
  }

  return (
    <div className="donation-list">
      <div className="shelters-grid">
        {shelters.map(shelter => (
          <DonationCard key={shelter.id} shelter={shelter} />
        ))}
      </div>
    </div>
  );
};

export default DonationList;