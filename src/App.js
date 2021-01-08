import React from 'react'
import './App.css';
import './css/bootstrap-grid.css';
import './css/bootstrap-reboot.css';
import './css/bootstrap.css';

import Header from "./components/Header.js"

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Appp from "./components/Appp"
import AboutMePage from "./pages/aboutme"
import NotFoundPage from "./pages/404"
import ContactPage from "./pages/contact"
import WorksPage from "./pages/works"
import CommentsPage from "./pages/comments"

function App() {
  return (
    <div className="App">
      <Header />
      <Router> 
        <Switch>
          <Route exact path="/" component={AboutMePage} />
          <Route path="/comments" component={Appp} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/works" component={WorksPage} />
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
