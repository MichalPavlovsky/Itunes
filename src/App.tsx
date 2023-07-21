import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import TheNavigation from './components/TheNavigation';
import About from "./views/About";
import Tunes from "./views/Tunes";
import Home from "./views/Home";
import Register from "./views/Register";
import Login from "./views/Login";
import UserPage from "./views/UserPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoggedIn = (value: boolean) => {
    setIsLoggedIn(value);
    console.log('app ' + isLoggedIn);
  };
  console.log(isLoggedIn);

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
          {!isLoggedIn && <Route path="/login" render={() => <Login valLog={isLoggedIn} isLogin={handleLoggedIn} />} />}
          {isLoggedIn && <Route path="/user" component={UserPage} />}
        </Switch>
      </main>
    </div>
  );
}

export default App;
