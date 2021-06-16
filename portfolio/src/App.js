import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';
 //Naturally pathnames and page names need to be updated
function App() {
  return (
    <>
    <Router>
      <Header/>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <Route exact path="/projects" component={Projects}></Route>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
