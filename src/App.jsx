import { useEffect, useState } from 'react';
import '../src/assets/sass/calculadora.scss'
import Cuerpo from './assets/components/Cuerpo'
import Respuesta from './assets/components/Respuesta'

function App() {

  const [input, setInput] = useState("");

  useEffect(() => {
    return () => {
      setInput(input);
    };
  }, []);

  const agregarValor = (valor) => {
    console.log(valor);
    let newValor = input + valor;
    console.log(newValor);
    setInput(newValor);
  }


  return (
    <div className="App">
      <div className="calculadora">
        <Respuesta input={input} />
        <Cuerpo agregarValor={agregarValor} setInput={setInput}/>
      </div>
    </div>
  )
}

export default App
