
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Products from './Pages/HomePage/Products/Products';
import Home from './Pages/HomePage/Home/Home';
import Navigation from './Pages/Shared/Navigation/Navigation';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Registard from './Pages/Login/Registard/Registard';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/products">
              <Products></Products>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Registard></Registard>
            </Route>

          </Switch>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
