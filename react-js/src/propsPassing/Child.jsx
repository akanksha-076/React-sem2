import React from 'react'

const Child = ({name,alert}) => {
  return (
    <>
    <div>Child</div>
    <h1>REndered in child componenr:{name}</h1>
    <button onClick={alert}>Click</button>
    </>
  )
}

export default Child