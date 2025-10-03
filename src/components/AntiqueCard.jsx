import './AntiqueCard.css'

function AntiqueCard({ antique, onEdit, onDelete }) {
  return (
    <div className="antique-card">
      <div className="antique-image">
        <img src={antique.image} alt={antique.name} />
      </div>
      <div className="antique-content">
        <h3>{antique.name}</h3>
        {antique.year && <p className="antique-year">Year: {antique.year}</p>}
        {antique.description && (
          <p className="antique-description">{antique.description}</p>
        )}
      </div>
      <div className="antique-actions">
        <button 
          className="btn btn-secondary"
          onClick={() => onEdit(antique)}
        >
          Edit
        </button>
        <button 
          className="btn btn-danger"
          onClick={() => onDelete(antique.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default AntiqueCard
