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
  const [filters, setFilters] = useState({
    category: '',
    minAge: '',
    maxAge: '',
    search: ''
  });

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

  const applyFilters = () => {
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

  useEffect(() => {
    applyFilters();
  }, [filters, animals]);

  const handleAddAnimal = (newAnimal) => {
    setAnimals(prev => [...prev, newAnimal]);
    setFilteredAnimals(prev => [...prev, newAnimal]);
    setShowAddForm(false);
  };

  const handleDeleteAnimal = async (animalId) => {
    if (window.confirm('Are you sure you want to delete this animal?')) {
      try {
        await api.deleteAnimal(animalId);
        setAnimals(prev => prev.filter(animal => animal.id !== animalId));
        setFilteredAnimals(prev => prev.filter(animal => animal.id !== animalId));
      } catch (error) {
        console.error('Error deleting animal:', error);
        alert('Failed to delete animal. Please try again.');
      }
    }
  };

  return (
    <div className="animals-page">
      <h1>Animals for Sale</h1>
      {showAddForm && <AddAnimalForm onAdd={handleAddAnimal} />}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name"
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        />
      </div>
      <div className="animals-container">
        <aside className="animals-sidebar">
          <AnimalFilters filters={filters} setFilters={setFilters} />
        </aside>
        <main className="animals-main">
          <AnimalList animals={filteredAnimals} onDelete={handleDeleteAnimal} />
        </main>
      </div>
    </div>
  );
};

export default Animals;