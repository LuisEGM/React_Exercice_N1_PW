import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Store from './pages/store';
import About from './pages/about';
import Cart from './pages/cart';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact
         component={Store} />
        <Route path="/about" component={About} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
