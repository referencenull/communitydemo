import { useState } from 'react'
import { initialAntiques } from './data'
import AntiqueList from './components/AntiqueList'
import AntiqueForm from './components/AntiqueForm'
import './App.css'

function App() {
  const [antiques, setAntiques] = useState(initialAntiques)
  const [editingAntique, setEditingAntique] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const addAntique = (antique) => {
    const newAntique = {
      ...antique,
      id: Math.max(...antiques.map(a => a.id), 0) + 1
    }
    setAntiques([...antiques, newAntique])
    setShowForm(false)
  }

  const updateAntique = (updatedAntique) => {
    setAntiques(antiques.map(a => 
      a.id === updatedAntique.id ? updatedAntique : a
    ))
    setEditingAntique(null)
    setShowForm(false)
  }

  const deleteAntique = (id) => {
    if (window.confirm('Are you sure you want to delete this antique?')) {
      setAntiques(antiques.filter(a => a.id !== id))
    }
  }

  const handleEdit = (antique) => {
    setEditingAntique(antique)
    setShowForm(true)
  }

  const handleCancel = () => {
    setEditingAntique(null)
    setShowForm(false)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🏺 Antique Catalog</h1>
        <p>Manage your collection of precious antiques</p>
      </header>

      <main className="app-main">
        <div className="app-controls">
          <button 
            className="btn btn-primary"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? 'Cancel' : '+ Add New Antique'}
          </button>
        </div>

        {showForm && (
          <AntiqueForm
            antique={editingAntique}
            onSubmit={editingAntique ? updateAntique : addAntique}
            onCancel={handleCancel}
          />
        )}

        <AntiqueList
          antiques={antiques}
          onEdit={handleEdit}
          onDelete={deleteAntique}
        />
      </main>
    </div>
  )
}

export default App
