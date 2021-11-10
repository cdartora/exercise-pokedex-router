import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import About from './About';
import NotFound from './NotFound';
import PokemonDetail from './PokemonDetail';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router> {/* browser router renoameado de router */}

        <Link to="/">
          <h1> Pokedex </h1>
        </Link>

        <Link to="/about">
          <h1> About </h1>
        </Link>

        <Switch>

          <Route
            exact path="/about"
            component={ About }
          />

          <Route /* rota para a pokedex chamando callback */
            exact path="/"
            render={ () => <Pokedex pokemons={pokemons} /> }
          />

          <Route
            exact path="/pokemon/:pokemonName"
            render={ (props) => <PokemonDetail {...props} /> }
          />

          <Route /* rota para página genérica utilizando o * */
            path="*"
            component={ NotFound }
          />

        </Switch>

      </Router>
    </div>
  );
}

export default App;