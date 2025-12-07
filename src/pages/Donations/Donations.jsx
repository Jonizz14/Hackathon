import DonationList from '../../components/Donations/DonationList';
import { useDonation } from '../../context/DonationContext';
import './Donations.css';

const Donations = () => {
  const { donations } = useDonation();

  return (
    <div className="donations-page">
      <h1>Support Animal Shelters</h1>
      <p>Donate to local shelters to help animals in need.</p>
      <DonationList />
      {donations.length > 0 && (
        <div className="donation-history">
          <h2>Your Donation History</h2>
          <ul>
            {donations.map(donation => (
              <li key={donation.id}>
                Donated ${donation.amount} to {donation.shelterName} on {new Date(donation.date).toLocaleDateString()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Donations;