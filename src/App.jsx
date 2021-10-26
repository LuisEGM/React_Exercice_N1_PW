import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Store from './pages/users/store';
import About from './pages/users/about';
import Cart from './pages/users/cart';

import ViewProducts from './pages/admin/viewProducts'
import AddProduct from './pages/admin/addProduct'

import NotFound from './pages/notFound'
import { ContextProvider } from './context/globalContext'

function App() {
  return (
    <ContextProvider>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/products" />
          <Route path="/products" component={Store} />
          <Route path="/about" component={About} />
          <Route path="/cart" component={Cart} />
          <Route path="/admin/view-products" component={ViewProducts} />
          <Route path="/admin/add-product" component={AddProduct} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ContextProvider>
  );
}

export default App;
