import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Switch, useHistory } from 'react-router-dom';
import { Cars, Home, Login, Register, Cart, Navbar, Admin, Footer, Account } from './index';

import '../style/App.css';
import NotFound from './NotFound';
import { fetchMe } from '../api';

const App = () => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState([]);
  const [username, setUsername] = useState("");
  console.log('token in App.jsx', { token });
  console.log('user in App.jsx', {user});

  const history = useHistory();


  useEffect(() => {

  }, [token, user]);

  return (
    <BrowserRouter>
      <header><Navbar token={token} setToken={setToken} setUsername={setUsername} user={user} setUser={setUser}></Navbar></header>
      <div className='app-container'>
      </div>
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Cars">
        <Cars userId={user?.id}/>
      </Route>
      <Route path="/Cart">
        <Cart userId={user?.id}/>
      </Route>
      <Route path="/Login">
          <Login setToken={setToken} setUsername={setUsername} username={username} setUser={setUser} />
      </Route>
      <Route path="/Register">
        <Register setToken={setToken} />
      </Route>
      <Route path="/Admin">
        <Admin userId={user?.id}/>
      </Route>
      <Route path="/account">
          <Account username={username} token={token} user={user} />
      </Route>
      <Route exact path="*">
        <NotFound />
      </Route>
      </Switch>
      <footer><Footer /></footer>
    </BrowserRouter>
  );
};

export default App;
