import React from 'react';
import './AntiqueCard.css';

const AntiqueCard = ({ antique, onEdit, onDelete }) => {
  return (
    <div className="antique-card">
      <div className="antique-image-container">
        <img 
          src={antique.image} 
          alt={antique.name}
          className="antique-image"
          loading="lazy"
        />
      </div>
      <div className="antique-details">
        <h3 className="antique-name">{antique.name}</h3>
        <p className="antique-description">{antique.description}</p>
        <div className="antique-info">
          <span className="info-item"><strong>Year:</strong> {antique.year}</span>
          <span className="info-item"><strong>Origin:</strong> {antique.origin}</span>
          <span className="info-item"><strong>Condition:</strong> {antique.condition}</span>
        </div>
        <div className="antique-actions">
          <button 
            className="btn btn-edit" 
            onClick={() => onEdit(antique)}
          >
            Edit
          </button>
          <button 
            className="btn btn-delete" 
            onClick={() => onDelete(antique.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AntiqueCard;
