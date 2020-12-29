import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header';
import InsertForm from './components/Insert';
import EditForm from './components/Edit';

function App() {
  return (
    <div className="App col-md-11 mt-5">
      <Router>
        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/insert" component={InsertForm} />
          <Route exact path="/edit" component={EditForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
