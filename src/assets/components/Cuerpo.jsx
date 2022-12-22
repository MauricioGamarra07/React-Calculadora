import React from 'react'
import Boton1 from './Boton1'
import Respuesta from './Respuesta'

function Cuerpo() {
  return (
    <div>
      <div className="cont-botones">
        <Boton1 boton={"AC"} color={"rgba(233, 24, 24, 0.795)"} fuente={"white"}/>
        <Boton1 boton={"√"} />
        <Boton1 boton={"%"} />
        <Boton1 boton={"÷"} />
        <Boton1 boton={"7"} />
        <Boton1 boton={"8"} />
        <Boton1 boton={"9"} />
        <Boton1 boton={"x"} />
        <Boton1 boton={"4"} />
        <Boton1 boton={"5"} />
        <Boton1 boton={"6"} />
        <Boton1 boton={"-"} />
        <Boton1 boton={"1"} />
        <Boton1 boton={"2"} />
        <Boton1 boton={"3"} />
        <Boton1 boton={"+"} />
        <Boton1 boton={"0"} />
        <Boton1 boton={"."} />
        <Boton1 boton={"¬"} />
        <Boton1 boton={"="} color={"rgba(22, 161, 22, 0.842)"} fuente={"white"}/>
      </div>
    </div>
  )
}

export default Cuerpo