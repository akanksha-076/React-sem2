import React from 'react';
import { useState } from "react";

function DarkLight() {
  const [dark, setDark] = useState(false);

  return (
    <div>
      <h1>{dark ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
}

export default DarkLight;