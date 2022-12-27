import { useEffect, useState } from 'react';
import '../src/assets/sass/calculadora.scss'
import Cuerpo from './assets/components/Cuerpo'
import Respuesta from './assets/components/Respuesta'

import {evaluate} from 'mathjs'

function App() {

  const [input, setInput] = useState("");
  const [solucion, setSolucion] = useState(0);

  const [parentesis, setParentesis] = useState(true);

  useEffect(() => {
    return () => {
      setInput(input);
      setSolucion(solucion);
    };
  }, []);

  const agregarValor = (valor) => {
    /* console.log(valor); */
    let newValor = input + valor;
    /* console.log(newValor); */
    setInput(newValor);
  }

  const agregarParentesis = () => {

    setParentesis(!parentesis);

    if(parentesis == true){
      agregarValor("(");
    }else{
      agregarValor(")");
    }
  }

  const calcular = () => {
    /* console.log(input); */
    /* console.log(evaluate(input)); */
    setSolucion(evaluate(input));
  }

  const eliminarUltimo = () => {
    /* console.log(input); */
    let borrar = input.slice(0,-1);
    /* console.log(borrar); */
    setInput(borrar);
  }

  return (
    <div className="App">
      <div className="calculadora">
        <Respuesta input={input} solucion={solucion} />
        <Cuerpo agregarValor={agregarValor} setInput={setInput} setSolucion={setSolucion} calcular={calcular} 
          eliminarUltimo={eliminarUltimo} agregarParentesis={agregarParentesis}/>
      </div>
    </div>
  )
}

export default App
