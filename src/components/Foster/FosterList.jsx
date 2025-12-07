import { useState, useEffect } from 'react';
import FosterCard from './FosterCard';
import { api } from '../../api/api';
import './FosterList.css';

const FosterList = () => {
  const [fosters, setFosters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFosters = async () => {
      try {
        const data = await api.getFoster();
        setFosters(data);
      } catch (error) {
        console.error('Error fetching fosters:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchFosters();
  }, []);

  if (loading) {
    return <div>Loading fosters...</div>;
  }

  return (
    <div className="foster-list">
      <div className="fosters-grid">
        {fosters.map(foster => (
          <FosterCard key={foster.id} foster={foster} />
        ))}
      </div>
    </div>
  );
};

export default FosterList;