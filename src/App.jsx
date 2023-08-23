import logo from './logo.svg';
import './App.css';
import Greeting from './components/geeting/greetings';
import BodyExcersise from './components/geeting/body';
import Generation from './components/geeting/generation';
import { Footer, Navbar } from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Greeting/>
      <BodyExcersise/>
      <Generation/>
      <Footer/>
    </div>
  );
}

export default App;
