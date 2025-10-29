import { useState } from 'react'
import AntiqueList from './components/AntiqueList'
import AntiqueForm from './components/AntiqueForm'
import { initialAntiqueObjects } from './data/antiqueData'
import './App.css'

function App() {
  const [antiques, setAntiques] = useState(initialAntiqueObjects)
  const [showForm, setShowForm] = useState(false)
  const [editingAntique, setEditingAntique] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const handleAddAntique = (formData) => {
    // Use a combination of timestamp and random number to reduce collision risk
    const newAntique = {
      id: Date.now() + Math.floor(Math.random() * 1000),
      ...formData
    }
    setAntiques([...antiques, newAntique])
    setShowForm(false)
  }

  const handleEditAntique = (formData) => {
    setAntiques(antiques.map(antique => 
      antique.id === editingAntique.id 
        ? { ...antique, ...formData }
        : antique
    ))
    setShowForm(false)
    setEditingAntique(null)
  }

  const handleDeleteAntique = (id) => {
    if (window.confirm('Are you sure you want to delete this antique object?')) {
      setAntiques(antiques.filter(antique => antique.id !== id))
    }
  }

  const handleEditClick = (antique) => {
    setEditingAntique(antique)
    setShowForm(true)
  }

  const handleFormCancel = () => {
    setShowForm(false)
    setEditingAntique(null)
  }

  const filteredAntiques = antiques.filter(antique =>
    antique.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    antique.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    antique.origin?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="app">
      <header className="app-header">
        <div className="container">
          <h1>🏺 Antique Objects Catalogue</h1>
          <p className="subtitle">Manage your collection of precious antique items</p>
        </div>
      </header>

      <main className="container">
        <div className="controls">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search antiques by name, description, or origin..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <button 
            className="btn btn-add"
            onClick={() => setShowForm(true)}
          >
            + Add New Antique
          </button>
        </div>

        <div className="stats">
          <p>Total items: <strong>{antiques.length}</strong></p>
          {searchTerm && (
            <p>Showing: <strong>{filteredAntiques.length}</strong> results</p>
          )}
        </div>

        <AntiqueList 
          antiques={filteredAntiques}
          onEdit={handleEditClick}
          onDelete={handleDeleteAntique}
        />

        {showForm && (
          <AntiqueForm
            onSubmit={editingAntique ? handleEditAntique : handleAddAntique}
            onCancel={handleFormCancel}
            editingAntique={editingAntique}
          />
        )}
      </main>

      <footer className="app-footer">
        <div className="container">
          <p>Antique Objects Catalogue &copy; 2025</p>
        </div>
      </footer>
    </div>
  )
}

export default App
