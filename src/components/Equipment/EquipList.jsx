import EquipCard from './EquipCard';
import './EquipList.css';

const EquipList = ({ equipments }) => {
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