import React from 'react'
import Data from '../Data.js';

export const Hollywood = () => {
    const HollywoodData = Data.filter((item) => item.category === 'Hollywood');
  return (
    <div>
      <div>Hollywood</div>
      {HollywoodData.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <img src={item.img_url} alt={item.title} />
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};
  
export default Hollywood
