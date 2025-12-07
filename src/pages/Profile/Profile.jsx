import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { useDonation } from '../../context/DonationContext';
import './Profile.css';

const Profile = () => {
  const { user } = useAuth();
  const { cart } = useCart();
  const { donations } = useDonation();

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="profile-page">
      <h1>My Profile</h1>
      <div className="profile-info">
        <h2>Welcome, {user.username}!</h2>
      </div>
      <div className="profile-sections">
        <div className="cart-section">
          <h3>My Cart</h3>
          {cart.length === 0 ? <p>No items in cart.</p> : (
            <ul>
              {cart.map(item => (
                <li key={item.id}>{item.name} - ${item.price}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="donations-section">
          <h3>My Donations</h3>
          {donations.length === 0 ? <p>No donations yet.</p> : (
            <ul>
              {donations.map(donation => (
                <li key={donation.id}>${donation.amount} to {donation.shelterName}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;