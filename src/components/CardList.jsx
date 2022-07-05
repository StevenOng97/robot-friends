import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div className="card-list">
      {robots.map((robot, i) => (
        <Card data={robot} key={i} />
      ))}
    </div>
  );
};

export default CardList;
