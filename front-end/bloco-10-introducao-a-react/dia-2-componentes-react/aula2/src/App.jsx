import './App.css';
import staringCat from './staringCat.jpg'
import Image from './Funcoes';

function App() {
  return (
    <div className="App">
      <h1>BenHur Albertassi</h1>
      <Image source={staringCat} alternativeText="Cute cat staring" />
    </div>
  );
}

export default App;
