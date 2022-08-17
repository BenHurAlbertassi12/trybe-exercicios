import React from 'react';
import './App.css';
import Header from './components/Header';
import GameInfo from './components/GameInfo';
import pokemons from './Data';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header titulo='Pokedex' />
        <br />
        <section>
          {pokemons.map((pokes) => (
            <GameInfo key={pokes.id} gameInfo={pokes} />
          ))}
        </section>
      </div>
    );
  }
}

export default App;
