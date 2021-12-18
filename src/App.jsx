import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Store from './pages/users/store';
import About from './pages/users/about';
import Cart from './pages/users/cart';

import ViewProducts from './pages/admin/viewProducts'
import AddProduct from './pages/admin/addProduct'
import Login from './pages/login'
import Register from './pages/register'

import NotFound from './pages/notFound'
import { ContextProvider } from './context/globalContext'

import PrivateRoute from './routes/privateRoute'
import PublicRoute from './routes/publicRoute'

import { AuthContext } from './context/authContext'

function App() {

  const { isAuthenticated } = useContext(AuthContext);
  const isAuth = isAuthenticated();

  return (
    <ContextProvider>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/store" />
          <Route path="/store" component={Store} />
          <Route path="/about" component={About} />
          <Route path="/cart" component={Cart} />

          <PublicRoute
            path="/login"
            isAuthenticated={isAuth}
          >
            <Login/>
          </PublicRoute>

          <PublicRoute
            path="/register"
            isAuthenticated={isAuth}
          >
            <Register />
          </PublicRoute>

          <PrivateRoute
            path="/admin/view-products"
            isAuthenticated={isAuth}
          >
            <ViewProducts/>
          </PrivateRoute>
          <PrivateRoute
            path="/admin/add-product"
            isAuthenticated={isAuth}
          >
            <AddProduct/>
          </PrivateRoute>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ContextProvider>
  );
}

export default App;
