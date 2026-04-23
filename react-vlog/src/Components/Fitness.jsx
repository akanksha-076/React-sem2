import React from 'react'
import Data from '../Data.js';

export const Fitness = () => {
  const FitnessData = Data.filter((item) => item.category === 'Fitness');
  return (
    <div>
      <div>Fitness</div>
      {FitnessData.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <img src={item.img_url} alt={item.title} />
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};  
    
export default Fitness
