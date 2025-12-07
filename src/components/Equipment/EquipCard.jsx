import Card from '../UI/Card';
import Button from '../UI/Button';
import { useCart } from '../../context/CartContext';
import './EquipCard.css';

const EquipCard = ({ equipment }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(equipment, 'equipment');
  };

  return (
    <Card className="equip-card">
      <img src={equipment.image} alt={equipment.name} className="equip-image" />
      <h3>{equipment.name}</h3>
      <p>Category: {equipment.category}</p>
      <p className="price">${equipment.price}</p>
      <Button onClick={handleAddToCart}>Buy Now</Button>
    </Card>
  );
};

export default EquipCard;