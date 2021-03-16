import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Board from './pages/Board/Board';
import Main from './pages/Main/Main';

const App: React.FC = () => (
  <BrowserRouter>
    <Navbar />
    <div className="container">
      <Switch>
        <Route component={Main} path="/" exact />
        <Route component={Board} path="/board" exact />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
