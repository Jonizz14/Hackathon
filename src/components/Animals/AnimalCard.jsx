import Card from '../UI/Card';
import Button from '../UI/Button';
import { FaTrash } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import './AnimalCard.css';

const AnimalCard = ({ animal, onDelete }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(animal, 'animal');
  };

  const handleDelete = () => {
    onDelete(animal.id);
  };

  return (
    <Card className="animal-card">
      <img src={animal.image} alt={animal.name} className="animal-image" />
      <h3>{animal.name}</h3>
      <p>Age: {animal.age} years</p>
      <p>Category: {animal.category}</p>
      <p className="price">${animal.price}</p>
      <div className="animal-card-buttons">
        <Button onClick={handleAddToCart}>Buy Now</Button>
      </div>
    </Card>
  );
};

export default AnimalCard;