import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Contact from './components/Contact/Contact/Contact';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import OurTeam from './components/OurTeam/OurTeam/OurTeam';
import OrderArea from './components/PlaceOrder/OrderArea/OrderArea';
import Portfolio from './components/Portfolio/Portfolio/Portfolio';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/orderArea">
            <OrderArea></OrderArea>
          </PrivateRoute>
          
          <Route path="/portfolio">
            <Portfolio></Portfolio>
          </Route>
          <Route path="/team">
            <OurTeam></OurTeam>
          </Route>
          <Route path="/contact">
          <Contact></Contact>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
