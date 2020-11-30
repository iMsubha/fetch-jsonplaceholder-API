import './App.css';
import Home from './components/Home'
import About from './components/About'
import Details from './components/Details'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="app">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}  />
          <Route path="/about" component={About} />
          <Route  exact path="/details" component={Details}/>
          <Route  path="/details/:id" component={Details}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
