import React from 'react'

function Boton1({boton, color, fuente}) {
  return (
    <div>
      <div className="boton1" style={{backgroundColor: color}}>
        <h2 style={{color: fuente}}>{boton}</h2>
      </div>
    </div>
  )
}

export default Boton1