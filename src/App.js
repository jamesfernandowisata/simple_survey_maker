import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import SurveyComponent from '../src/pages/SurveyComponent';
import result from '../src/pages/result';

function App() {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/survey" component={SurveyComponent} />
      <Route path="/result" component={ContactPage} />
    </div>
  );
}

export default App;