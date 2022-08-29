import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import HowTo from './components/HowTo';
import Profile from './components/Profile';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
        <Route exact path='/' component={ Home } />
        <Route path="/about" component={About} />
        <Route path="/howto" component={HowTo} />
        <Route path="/profile" component={Profile} />
    </BrowserRouter>
  );
}

export default App;
