import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Goal } from './components/Goal';
import { SetGoal } from './components/SetGoal';
import { IncomeExpenses } from './components/IncomeExpenses';
import { AddRun } from './components/AddRun';
import { RunList } from './components/RunList';
import { Footer } from './components/Footer';

import { GlobalProvider } from './context/GlobalState';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Router basename={"/run-log"}>
      <Container fluid>
        <Header />
        <Route path="/" exact component={Goal} />
        <Route path="/set-goal" exact component={SetGoal} />
        <Route path="/" exact component={IncomeExpenses} />
        <Route path="/add-run" exact component={AddRun} />
        <Route path="/" exact component={RunList} />
        <Route path="/" exact component={Footer} />
      </Container>
      </Router>
    </GlobalProvider>
  );
}

export default App;