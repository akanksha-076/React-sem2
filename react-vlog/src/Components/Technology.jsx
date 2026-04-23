import React from 'react'
import Data from '../Data.js';

export const Technology = () => {
  const TechData = Data.filter((item) => item.category === 'Technology');
  return (
    <div>
      <div>Technology</div>
      {TechData.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <img src={item.img_url} alt={item.title} />
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}; 
 

export default Technology
