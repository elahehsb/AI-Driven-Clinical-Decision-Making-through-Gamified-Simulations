
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuestionnairePage from './pages/QuestionnairePage';
import VirtualPatientPage from './pages/VirtualPatientPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/questionnaire" component={QuestionnairePage} />
        <Route path="/virtual-patient" component={VirtualPatientPage} />
      </Switch>
    </Router>
  );
}

export default App;
