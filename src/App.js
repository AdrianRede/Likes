import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Componentes
import Home from "./components/Home/Home";
import ListaCategorias from "./components/Categorias/ListaCategorias";

import CategoriasState from './context/Categorias/categoriasState'

function App() {
  return (
    <CategoriasState>
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/categorias' component={ListaCategorias} />
            </Switch>
        </Router>
    </CategoriasState>
  );
}

export default App;
