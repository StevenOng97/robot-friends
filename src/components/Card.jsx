import React from 'react';

const Card = ({ data }) => {
  const { name, email, id } = data;

  return (
    <div className="bg-light-blue dib br3 pa3 ma2 grow">
      <img src={`https://robohash.org/${id}?200x200`} alt="robot" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
