import Card from '../UI/Card';
import Button from '../UI/Button';
import { useCart } from '../../context/CartContext';
import './AnimalCard.css';

const AnimalCard = ({ animal }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(animal, 'animal');
  };

  return (
    <Card className="animal-card">
      <img src={animal.image} alt={animal.name} className="animal-image" />
      <h3>{animal.name}</h3>
      <p>Age: {animal.age} years</p>
      <p>Category: {animal.category}</p>
      <p className="price">${animal.price}</p>
      <Button onClick={handleAddToCart}>Buy Now</Button>
    </Card>
  );
};

export default AnimalCard;