import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.scss';

// components
import TheNavigation from './components/TheNavigation';
// views
import About from "./views/About";
import Tunes from "./views/Tunes";
import Home from "./views/Home";
import Register from "./views/Register";
import Login from "./views/Login";
import UserPage from "./views/UserPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');

  return (
    <div className="App App-header">
      <header>
        {!isLoggedIn && <TheNavigation />}
      </header>
      <main className="content">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/tunes" component={Tunes} />
          <Route path="/about" component={About} />
          <Route path="/register" component={Register} />
          <Route path="/login">
            {isLoggedIn ? <Redirect to="/user" /> : <Login valLog={isLoggedIn} isLogin={setIsLoggedIn} setToken={setToken} />}
          </Route>
          <Route path="/user">
            {isLoggedIn ? <UserPage token={token} /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
