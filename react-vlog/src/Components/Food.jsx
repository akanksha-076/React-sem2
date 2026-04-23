import React from 'react'
import Data from '../Data.js';

export const Food = () => {
  const FoodData = Data.filter((item) => item.category === 'Food');
  return (
    <div>
      <div>Food</div>
      {FoodData.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <img src={item.img_url} alt={item.title} />
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};  
  
export default Food