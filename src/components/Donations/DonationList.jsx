import DonationCard from './DonationCard';
import './DonationList.css';

const DonationList = ({ shelters }) => {
  return (
    <div className="donation-list">
      <div className="shelters-grid">
        {shelters.map(shelter => (
          <DonationCard key={shelter.id} shelter={shelter} />
        ))}
      </div>
    </div>
  );
};

export default DonationList;