import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { useDonation } from '../../context/DonationContext';
import { FaUser, FaShoppingCart, FaHeart, FaSignOutAlt } from 'react-icons/fa';
import './Profile.css';

const Profile = () => {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const { donations } = useDonation();

  if (!user) {
    return (
      <div className="profile-page">
        <div className="login-prompt">
          <FaUser size={50} />
          <h2>Please log in to view your profile</h2>
          <p>Access your account to manage your cart and donations</p>
        </div>
      </div>
    );
  }

  const totalCartValue = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalDonations = donations.reduce((sum, donation) => sum + donation.amount, 0);

  return (
    <div className="profile-page">
      <h1 className="profile-title">My Profile</h1>

      <div className="profile-header">
        <div className="user-avatar">
          <FaUser size={60} />
        </div>
        <div className="user-info">
          <h2>Welcome back, {user.username}!</h2>
          <p>{user.email}</p>
          <button onClick={logout} className="logout-btn"> Logout
          </button>
        </div>
      </div>

      <div className="profile-stats">
        <div className="stat-card">
          <FaShoppingCart size={30} />
          <div>
            <h3>{cart.length}</h3>
            <p>Items in Cart</p>
          </div>
        </div>
        <div className="stat-card">
          <span className="dollar-icon">$</span>
          <div>
            <h3>${totalCartValue}</h3>
            <p>Cart Value</p>
          </div>
        </div>
        <div className="stat-card">
          <FaHeart size={30} />
          <div>
            <h3>${totalDonations}</h3>
            <p>Total Donated</p>
          </div>
        </div>
      </div>

      <div className="profile-sections">
        <div className="profile-section">
          <h3><FaShoppingCart /> My Cart</h3>
          {cart.length === 0 ? (
            <div className="empty-state">
              <FaShoppingCart size={40} />
              <p>Your cart is empty</p>
            </div>
          ) : (
            <div className="items-list">
              {cart.map(item => (
                <div key={item.id} className="item-card">
                  <img src={item.image} alt={item.name} className="item-image" />
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p>${item.price} × {item.quantity}</p>
                  </div>
                </div>
              ))}
              <div className="total-amount">
                <strong>Total: ${totalCartValue}</strong>
              </div>
            </div>
          )}
        </div>

        <div className="profile-section">
          <h3><FaHeart /> My Donations</h3>
          {donations.length === 0 ? (
            <div className="empty-state">
              <FaHeart size={40} />
              <p>No donations yet</p>
            </div>
          ) : (
            <div className="items-list">
              {donations.map(donation => (
                <div key={donation.id} className="donation-card">
                  <div className="donation-details">
                    <h4>${donation.amount}</h4>
                    <p>to {donation.shelterName}</p>
                    <small>{new Date(donation.date).toLocaleDateString()}</small>
                  </div>
                </div>
              ))}
              <div className="total-amount">
                <strong>Total Donated: ${totalDonations}</strong>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;