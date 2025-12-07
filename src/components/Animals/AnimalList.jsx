import AnimalCard from './AnimalCard';
import './AnimalList.css';

const AnimalList = ({ animals }) => {
  return (
    <div className="animal-list">
      <div className="animals-grid">
        {animals.map(animal => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AnimalList;