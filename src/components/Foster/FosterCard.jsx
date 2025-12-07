import { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Input from '../UI/Input';
import './FosterCard.css';

const FosterCard = ({ foster }) => {
  const [message, setMessage] = useState('');

  const handleApply = () => {
    // For now, just alert; later integrate with API
    alert(`Application sent for fostering ${foster.name}. Message: ${message}`);
  };

  return (
    <Card className="foster-card">
      <img src={foster.image} alt={foster.name} className="foster-image" />
      <h3>{foster.name}</h3>
      <p>Age: {foster.age} years</p>
      <p>Category: {foster.category}</p>
      <p>Description: {foster.description}</p>
      <Input
        label="Your message"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Why do you want to foster this animal?"
      />
      <Button onClick={handleApply}>Apply to Foster</Button>
    </Card>
  );
};

export default FosterCard;