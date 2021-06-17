import React from "react";
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Router>
      <div>
      <Header/>
      {/* <Route exact path="/" component={Home}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <Route exact path="/projects" component={Projects}></Route> */}
      <Switch>
      <Route exact path='/'><Home/></Route>
      <Route exact path='/contact'><Contact/></Route>
      <Route exact path='/projects'><Projects/></Route>
      </Switch>
      <Footer/>
      </div>
    </Router>
    </>
  );
}

export default App;
