import React from 'react'
import './App.css';

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
<<<<<<< HEAD
          <Route exact path="/" component={AboutMePage} />
          <Route path="/aboutme" component={Appp} />
=======
          <Route exact path="/" component={Appp} />
          <Route path="/aboutme" component={AboutMePage} />
>>>>>>> f1823e9784d2e44ab2f6a5a859f2896659dc2cbf
          <Route path="/comments" component={CommentsPage} />
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
