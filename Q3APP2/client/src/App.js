import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/layout/Login'
import Register from './components/layout/Register'
import Navbar from './components/Navbar'
import Landing from './components/pages/Landing'
import Question1 from './components/pages/survey/Question1'
import Final from './components/pages/survey/Final'
import Admin from './components/pages/Admin'
import Usermgmt from './components/pages/Usermgmt'
import { Provider } from './context'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
      <Router>
        {/* <Question /> */}
        <Route exact path="/" strict component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/question" component={Question1} />
        <Route exact path="/final" component={Final}/>
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/usermgmt" component={Usermgmt} />
      </Router>
      </Provider>
    );
  }
}

export default App;
