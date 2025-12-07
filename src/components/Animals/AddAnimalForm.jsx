import { useState } from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';
import './AddAnimalForm.css';

const AddAnimalForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    category: '',
    price: '',
    image: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...formData, id: Date.now() });
    setFormData({ name: '', age: '', category: '', price: '', image: '', description: '' });
  };

  return (
    <form className="add-animal-form" onSubmit={handleSubmit}>
      <h3>Add New Animal</h3>
      <Input
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        label="Age"
        name="age"
        type="number"
        value={formData.age}
        onChange={handleChange}
        required
      />
      <Input
        label="Category"
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
      />
      <Input
        label="Price"
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <Input
        label="Image URL"
        name="image"
        value={formData.image}
        onChange={handleChange}
        required
      />
      <Input
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <Button type="submit">Add Animal</Button>
    </form>
  );
};

export default AddAnimalForm;