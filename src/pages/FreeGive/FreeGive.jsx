import { useState, useEffect } from 'react';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import { api } from '../../api/api';
import './FreeGive.css';

const FreeGive = () => {
  const [freeAnimals, setFreeAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFreeAnimals = async () => {
      try {
        const data = await api.getFreeAnimals();
        setFreeAnimals(data);
      } catch (error) {
        console.error('Error fetching free animals:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchFreeAnimals();
  }, []);

  if (loading) return <div>Loading free animals...</div>;

  return (
    <div className="free-give-page">
      <h1>Free Animals</h1>
      <p>Animals available for free adoption.</p>
      <div className="free-animals-grid">
        {freeAnimals.map(animal => (
          <Card key={animal.id} className="free-animal-card">
            <img src={animal.image} alt={animal.name} />
            <h3>{animal.name}</h3>
            <p>Age: {animal.age} years</p>
            <p>Category: {animal.category}</p>
            <Button>Adopt Me</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FreeGive;