import { useCart } from '../../context/CartContext';
import Button from '../../components/UI/Button';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={`${item.id}-${item.type}`} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, item.type, item.quantity - 1)} className="quantity-btn">-</button>
                    <span className="quantity">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.type, item.quantity + 1)} className="quantity-btn">+</button>
                    <button onClick={() => removeFromCart(item.id, item.type)} className="delete-btn">Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h2>Total: ${getTotalPrice()}</h2>
            <Button onClick={clearCart}>Clear Cart</Button>
            <Button>Checkout</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;