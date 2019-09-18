import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/Navbar';
import Frozen from './components/Frozen';
import Dairy from './components/Dairy';
import Main from './components/Main';
import Meat from './components/Meat';

function App(){
  return(
    <Router>
      <div className="App">
    <Route path='/' component={NavBar} />
    <Route path='/' exact component={Main} />
    <Route path='/Frozen' component= {Frozen} />
    <Route path='/Dairy' component= {Dairy} />
    <Route path='/Meat' component= {Meat} />
    </div>
    </Router>
  )
}

export default App;
