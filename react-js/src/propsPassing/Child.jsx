import React from 'react'

const Child = ({name,alert,hi}) => {
  return (
    <>
    <div>Child</div>
    <h1>Rendered in child component:{name}</h1>
    <button onClick={alert}>Click</button>
    <p>Button 2</p>
    <button onClick={hi}>Click ME Too</button>
    <h2>Byeeee!</h2>
    </>
  )
}

export default Child