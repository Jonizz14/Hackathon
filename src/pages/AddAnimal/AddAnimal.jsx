import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FaPaw, FaPlus } from 'react-icons/fa';
import './AddAnimal.css';

function AddAnimal() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    price: '',
    category: 'Home Pets',
    image: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const newAnimal = {
        ...formData,
        id: Date.now(),
        price: parseFloat(formData.price),
        age: parseInt(formData.age)
      };

      const response = await fetch('http://localhost:3001/animals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAnimal),
      });

      if (response.ok) {
        alert('Animal added successfully!');
        navigate('/animals');
      } else {
        alert('Failed to add animal. Please try again.');
      }
    } catch (error) {
      console.error('Error adding animal:', error);
      alert('Error adding animal. Please try again.');
    }
  };

  const categories = ['Home Pets', 'Farm', 'Exotic', 'Wild'];

  return (
    <div className="add-animal-page">
      <div className="container">
        <div className="add-animal-header">
          <FaPaw className="header-icon" />
          <h1>Add New Animal</h1>
          <p>Add a new animal to our marketplace</p>
        </div>

        <form className="add-animal-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Animal Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter animal name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">Age (years) *</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                min="0"
                max="50"
                placeholder="Enter age"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="price">Price ($) *</label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                min="0"
                step="0.01"
                placeholder="Enter price"
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Enter image URL (optional)"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Enter animal description (optional)"
            />
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={() => navigate('/animals')}>
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              <FaPlus />
              Add Animal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddAnimal;