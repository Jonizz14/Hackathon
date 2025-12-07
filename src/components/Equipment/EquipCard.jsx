import Card from '../UI/Card';
import Button from '../UI/Button';
import { useCart } from '../../context/CartContext';
import './EquipCard.css';

const EquipCard = ({ equipment }) => {
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart();

  const cartItem = cart.find(item => item.id === equipment.id && item.type === 'equipment');
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    addToCart(equipment, 'equipment');
  };

  const handleIncrease = () => {
    updateQuantity(equipment.id, 'equipment', quantity + 1);
  };

  const handleDecrease = () => {
    updateQuantity(equipment.id, 'equipment', quantity - 1);
  };

  const handleRemove = () => {
    removeFromCart(equipment.id, 'equipment');
  };

  return (
    <Card className="equip-card">
      <img src={equipment.image} alt={equipment.name} className="equip-image" />
      <h3>{equipment.name}</h3>
      <p>Category: {equipment.category}</p>
      <p className="price">${equipment.price}</p>
      {quantity === 0 ? (
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      ) : (
        <div className="quantity-controls">
          <button onClick={handleDecrease} className="quantity-btn">-</button>
          <span className="quantity">{quantity}</span>
          <button onClick={handleIncrease} className="quantity-btn">+</button>
          <button onClick={handleRemove} className="delete-btn">Delete</button>
        </div>
      )}
    </Card>
  );
};

export default EquipCard;