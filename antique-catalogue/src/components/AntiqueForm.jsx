import React, { useState, useEffect } from 'react';
import './AntiqueForm.css';

const AntiqueForm = ({ onSubmit, onCancel, editingAntique }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    year: '',
    origin: '',
    condition: 'Good'
  });

  useEffect(() => {
    if (editingAntique) {
      setFormData({
        name: editingAntique.name,
        description: editingAntique.description,
        image: editingAntique.image,
        year: editingAntique.year,
        origin: editingAntique.origin,
        condition: editingAntique.condition
      });
    }
  }, [editingAntique]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.description || !formData.image) {
      alert('Please fill in all required fields (Name, Description, Image URL)');
      return;
    }
    onSubmit(formData);
    setFormData({
      name: '',
      description: '',
      image: '',
      year: '',
      origin: '',
      condition: 'Good'
    });
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <h2>{editingAntique ? 'Edit Antique Object' : 'Add New Antique Object'}</h2>
        <form onSubmit={handleSubmit} className="antique-form">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Victorian Porcelain Vase"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the antique object..."
              rows="3"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Image URL *</label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="year">Year</label>
              <input
                type="text"
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                placeholder="e.g., 1880"
              />
            </div>

            <div className="form-group">
              <label htmlFor="origin">Origin</label>
              <input
                type="text"
                id="origin"
                name="origin"
                value={formData.origin}
                onChange={handleChange}
                placeholder="e.g., England"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="condition">Condition</label>
            <select
              id="condition"
              name="condition"
              value={formData.condition}
              onChange={handleChange}
            >
              <option value="Excellent">Excellent</option>
              <option value="Very Good">Very Good</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
              <option value="Poor">Poor</option>
            </select>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              {editingAntique ? 'Update' : 'Add'} Object
            </button>
            <button type="button" className="btn btn-secondary" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AntiqueForm;
