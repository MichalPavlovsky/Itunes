import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

// components
import TheNavigation from './components/TheNavigation'
// views
import About from "./views/About";
import Tunes from "./views/Tunes";
import Home from "./views/Home";
import Register from "./views/Register";
import Login from "./views/Login";

function App() {
  return (
    <div className="App App-header">
      <header>  
        <TheNavigation/>
      </header>
      <main className="content">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/tunes" component={Tunes}/>
        <Route path="/about" component={About}/>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
      </main>
    </div>
  );
}

export default App;
