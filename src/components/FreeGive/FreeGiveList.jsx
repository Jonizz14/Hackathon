import FreeGiveCard from './FreeGiveCard';
import './FreeGiveList.css';

const FreeGiveList = ({ freeAnimals }) => {
  return (
    <div className="free-give-list">
      <div className="free-give-grid">
        {freeAnimals.map(animal => (
          <FreeGiveCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default FreeGiveList;