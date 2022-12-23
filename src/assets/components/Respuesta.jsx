import React from 'react'

function Respuesta({input}) {
  return (
    <div>
      <div className="respuesta">
        <input type="text" placeholder='0' disabled={true} id='salida' value={input}/>
      </div>
    </div>
  )
}

export default Respuesta