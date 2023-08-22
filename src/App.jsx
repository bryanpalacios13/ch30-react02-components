import logo from './logo.svg';
import './App.css';
import Greeting from './components/geeting/greetings';
import BodyExcersise from './components/geeting/body';
import Generation from './components/geeting/generation';
import { Navbar } from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      {/* Agrgar NavBar */}
      <Navbar/>
      <Greeting/>
      {/* Agregar un componente con 3 etiquetas html */}
      <BodyExcersise/>
      <Generation/>
      {/* Agregar footer */}
    </div>
  );
}

export default App;
