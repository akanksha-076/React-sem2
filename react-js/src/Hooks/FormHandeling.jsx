import React from 'react';
import { useState } from "react";

function FormHandeling() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Hello, {name}</h2>
    </div>
  );
}

export default FormHandeling;