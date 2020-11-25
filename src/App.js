import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Contact from './components/Contact/Contact/Contact';
import Account from './components/Dashboard/Account/Account';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import OurTeam from './components/OurTeam/OurTeam/OurTeam';
import OrderArea from './components/PlaceOrder/OrderArea/OrderArea';
import Portfolio from './components/Portfolio/Portfolio/Portfolio';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ScrollToTop from "react-scroll-to-top";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <ScrollToTop smooth color="#6f00ff" />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/orderArea/:id">
            <OrderArea></OrderArea>
          </PrivateRoute>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/account">
            <Account></Account>
          </Route>
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
