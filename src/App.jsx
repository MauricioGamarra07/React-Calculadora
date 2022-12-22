import '../src/assets/sass/calculadora.scss'
import Cuerpo from './assets/components/Cuerpo'
import Respuesta from './assets/components/Respuesta'

function App() {

  return (
    <div className="App">
      <div className="calculadora">
        <Respuesta />
        <Cuerpo />
      </div>
    </div>
  )
}

export default App
