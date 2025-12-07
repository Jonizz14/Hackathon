import Card from '../UI/Card';
import Button from '../UI/Button';
import { useDonation } from '../../context/DonationContext';
import './DonationCard.css';

const DonationCard = ({ shelter }) => {
  const { addDonation } = useDonation();

  const handleDonate = (amount) => {
    addDonation({ shelterId: shelter.id, shelterName: shelter.name, amount });
    alert(`Donated $${amount} to ${shelter.name}`);
  };

  return (
    <Card className="donation-card">
      <img src={shelter.image} alt={shelter.name} className="shelter-image" />
      <h3>{shelter.name}</h3>
      <p>{shelter.description}</p>
      <p>Location: {shelter.location}</p>
      <div className="donation-buttons">
        <Button onClick={() => handleDonate(10)}>$10</Button>
        <Button onClick={() => handleDonate(25)}>$25</Button>
        <Button onClick={() => handleDonate(50)}>$50</Button>
      </div>
    </Card>
  );
};

export default DonationCard;