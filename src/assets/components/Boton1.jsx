import React from 'react'

function Boton1({boton, color, fuente, funcionClick}) {
  return (
    <>
      <div className="boton1" style={{backgroundColor: color, color: fuente}} onClick={(e) => {
        let valor = e.target.innerHTML;
        /* console.log(valor); */
        funcionClick(valor);
      }}>{boton}
      </div>
    </>
  )
}

export default Boton1