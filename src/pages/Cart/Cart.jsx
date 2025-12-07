import { useCart } from '../../context/CartContext';
import Button from '../../components/UI/Button';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  <Button onClick={() => removeFromCart(index)}>Remove</Button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h2>Total: ${total}</h2>
            <Button onClick={clearCart}>Clear Cart</Button>
            <Button>Checkout</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;