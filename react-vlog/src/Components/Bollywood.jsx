import React from 'react';
import Data from '../Data.js';

const Bollywood = () => {
  const BollywoodData = Data.filter((item) => item.category === 'Bollywood');
  return (
    <div>
      <h1>Bollywood Page</h1>
      {BollywoodData.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <img src={item.img_url} alt={item.title} />
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

// THIS IS THE MISSING LINE:
export default Bollywood;