
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


function App() {
  return (
    <div className="App">
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

        </Switch>

      </Router>
    </div>
  );
}

export default App;
