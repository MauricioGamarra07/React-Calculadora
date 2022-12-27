import React from 'react'

function Respuesta({input, solucion}) {
  return (
    <div>
      <div className="respuesta">
        <input type="text" placeholder='0' disabled={true} id='salida' value={input}/>
        <input type="text" placeholder='0' disabled={true} id='solucion' value={solucion}/>
      </div>
    </div>
  )
}

export default Respuesta