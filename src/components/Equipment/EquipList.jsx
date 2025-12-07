import { useState, useEffect } from 'react';
import EquipCard from './EquipCard';
import { api } from '../../api/api';
import './EquipList.css';

const EquipList = () => {
  const [equipments, setEquipments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEquipments = async () => {
      try {
        const data = await api.getEquipments();
        setEquipments(data);
      } catch (error) {
        console.error('Error fetching equipments:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchEquipments();
  }, []);

  if (loading) {
    return <div>Loading equipments...</div>;
  }

  return (
    <div className="equip-list">
      <div className="equipments-grid">
        {equipments.map(equipment => (
          <EquipCard key={equipment.id} equipment={equipment} />
        ))}
      </div>
    </div>
  );
};

export default EquipList;