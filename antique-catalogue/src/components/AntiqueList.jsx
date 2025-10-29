import React from 'react';
import AntiqueCard from './AntiqueCard';
import './AntiqueList.css';

const AntiqueList = ({ antiques, onEdit, onDelete }) => {
  if (antiques.length === 0) {
    return (
      <div className="empty-state">
        <p>No antique objects in the catalogue yet. Add your first item!</p>
      </div>
    );
  }

  return (
    <div className="antique-list">
      {antiques.map((antique) => (
        <AntiqueCard 
          key={antique.id}
          antique={antique}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default AntiqueList;
