import Card from '../UI/Card';
import Button from '../UI/Button';
import './FreeGiveCard.css';

const FreeGiveCard = ({ animal }) => {
  const handleAdopt = () => {
    alert(`Adoption request sent for ${animal.name}`);
  };

  return (
    <Card className="free-give-card">
      <img src={animal.image} alt={animal.name} className="free-give-image" />
      <h3>{animal.name}</h3>
      <p>Age: {animal.age} years</p>
      <p>Category: {animal.category}</p>
      <p>Description: {animal.description}</p>
      <Button onClick={handleAdopt}>Adopt Me</Button>
    </Card>
  );
};

export default FreeGiveCard;