import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/css/App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Create from './pages/Create';


function App () {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/create" component={Create}/>
  </Router>
  );
}

export default App;
