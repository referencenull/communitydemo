import AntiqueCard from './AntiqueCard'
import './AntiqueList.css'

function AntiqueList({ antiques, onEdit, onDelete }) {
  if (antiques.length === 0) {
    return (
      <div className="empty-state">
        <p>No antiques in your catalog yet.</p>
        <p>Click "Add New Antique" to get started!</p>
      </div>
    )
  }

  return (
    <div className="antique-list">
      {antiques.map(antique => (
        <AntiqueCard
          key={antique.id}
          antique={antique}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default AntiqueList
