import { useState, useEffect } from 'react';
import AnimalList from '../../components/Animals/AnimalList';
import AnimalFilters from '../../components/Animals/AnimalFilters';
import AddAnimalForm from '../../components/Animals/AddAnimalForm';
import { api } from '../../api/api';
import './Animals.css';

const Animals = () => {
  const [animals, setAnimals] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const data = await api.getAnimals();
        setAnimals(data);
        setFilteredAnimals(data);
      } catch (error) {
        console.error('Error fetching animals:', error);
      }
    };
    fetchAnimals();
  }, []);

  const handleFilter = (filters) => {
    let filtered = animals;

    if (filters.search) {
      filtered = filtered.filter(animal =>
        animal.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.category) {
      filtered = filtered.filter(animal => animal.category === filters.category);
    }

    if (filters.minAge) {
      filtered = filtered.filter(animal => animal.age >= parseInt(filters.minAge));
    }

    if (filters.maxAge) {
      filtered = filtered.filter(animal => animal.age <= parseInt(filters.maxAge));
    }

    setFilteredAnimals(filtered);
  };

  const handleAddAnimal = (newAnimal) => {
    setAnimals(prev => [...prev, newAnimal]);
    setFilteredAnimals(prev => [...prev, newAnimal]);
    setShowAddForm(false);
  };

  return (
    <div className="animals-page">
      <h1>Animals for Sale</h1>
      <button onClick={() => setShowAddForm(!showAddForm)}>
        {showAddForm ? 'Cancel' : 'Add New Animal'}
      </button>
      {showAddForm && <AddAnimalForm onAdd={handleAddAnimal} />}
      <AnimalFilters onFilter={handleFilter} />
      <AnimalList animals={filteredAnimals} />
    </div>
  );
};

export default Animals;