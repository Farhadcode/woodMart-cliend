
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Pages/HomePage/Home/Home';
import Navigation from './Pages/Shared/Navigation/Navigation';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Registard from './Pages/Login/Registard/Registard';
import Admin from './Pages/Admin/AdminDashBord/AdminDashBord';

import AddProduct from './Pages/Admin/AddProduct/AddProduct';

import Products from './Pages/AllProduct/Products/Products';
import Purchase from './Pages/Shop/Purchase/Purchase';
import UserHome from './Pages/UserDashboard/UserHome/UserHome';
import UserDashboardHome from './Pages/UserDashboard/userDashboardHome/userDashboardHome';



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
            <Route path="/products">
              <Products></Products>
            </Route>
            <PrivateRoute path="/purchase/:productId">
              <Purchase></Purchase>
            </PrivateRoute>
            <Route path="/admin">
              <Admin></Admin>
            </Route>
            <Route path="/userDashboard">

              <UserDashboardHome></UserDashboardHome>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Registard></Registard>
            </Route>
            <Route path="/addProduct">
              <AddProduct></AddProduct>
            </Route>

          </Switch>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
