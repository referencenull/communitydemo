import { useState, useEffect } from 'react'
import './AntiqueForm.css'

function AntiqueForm({ antique, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: '',
    year: ''
  })

  useEffect(() => {
    if (antique) {
      setFormData(antique)
    }
  }, [antique])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name.trim()) {
      alert('Please enter a name for the antique')
      return
    }
    onSubmit(formData)
    setFormData({
      name: '',
      image: '',
      description: '',
      year: ''
    })
  }

  return (
    <div className="antique-form-container">
      <form className="antique-form" onSubmit={handleSubmit}>
        <h2>{antique ? 'Edit Antique' : 'Add New Antique'}</h2>
        
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g., Victorian Oak Writing Desk"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div className="form-group">
          <label htmlFor="year">Year</label>
          <input
            type="number"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            placeholder="e.g., 1890"
            min="1000"
            max={new Date().getFullYear()}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter a description of the antique..."
            rows="4"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-success">
            {antique ? 'Update' : 'Add'} Antique
          </button>
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default AntiqueForm
