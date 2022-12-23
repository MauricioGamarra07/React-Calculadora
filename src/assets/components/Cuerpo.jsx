import Boton1 from './Boton1'

function Cuerpo({agregarValor, setInput}) {

  return (
    <div>
      <div className="cont-botones">
        <Boton1 boton={"AC"} color={"rgba(233, 24, 24, 0.795)"} fuente={"white"} 
        funcionClick={() => setInput("")}/>
        <Boton1 boton={"√"} funcionClick={agregarValor} />
        <Boton1 boton={"%"} funcionClick={agregarValor} />
        <Boton1 boton={"÷"} funcionClick={agregarValor} />
        <Boton1 boton={"7"} funcionClick={agregarValor} />
        <Boton1 boton={"8"} funcionClick={agregarValor} />
        <Boton1 boton={"9"} funcionClick={agregarValor} />
        <Boton1 boton={"x"} funcionClick={agregarValor} />
        <Boton1 boton={"4"} funcionClick={agregarValor} />
        <Boton1 boton={"5"} funcionClick={agregarValor} />
        <Boton1 boton={"6"} funcionClick={agregarValor} />
        <Boton1 boton={"-"} funcionClick={agregarValor} />
        <Boton1 boton={"1"} funcionClick={agregarValor} />
        <Boton1 boton={"2"} funcionClick={agregarValor} />
        <Boton1 boton={"3"} funcionClick={agregarValor} />
        <Boton1 boton={"+"} funcionClick={agregarValor} />
        <Boton1 boton={"0"} funcionClick={agregarValor} />
        <Boton1 boton={"."} funcionClick={agregarValor} />
        <Boton1 boton={"¬"} funcionClick={() => setInput("")} />
        <Boton1 boton={"="} color={"rgba(22, 161, 22, 0.842)"} fuente={"white"} 
        funcionClick={() => setInput("")}/>
      </div>
    </div>
  )
}

export default Cuerpo