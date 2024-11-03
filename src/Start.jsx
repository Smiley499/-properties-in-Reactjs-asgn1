import React, { useState } from 'react'
function Hello(a) {
  return (

    <div id='container'>
      <h1 id='name'>name: {a.name} </h1>
      <h2 id='name'>born: {a.born}</h2>
      <h2 id='name'> location: {a.location}</h2>
    </div>
  )
}
export default Hello


