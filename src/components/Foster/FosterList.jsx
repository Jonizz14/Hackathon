import FosterCard from './FosterCard';
import './FosterList.css';

const FosterList = ({ foster }) => {
  return (
    <div className="foster-list">
      <div className="fosters-grid">
        {foster.map(item => (
          <FosterCard key={item.id} foster={item} />
        ))}
      </div>
    </div>
  );
};

export default FosterList;