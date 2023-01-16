import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Supervisor from "./components/Supervisor";
import Student from "./components/Student";
import CssBaseline from '@mui/material/CssBaseline';
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Login } />
        <Route path='/supervisor' component={Supervisor} />
        <Route path="/About" component={About} />
        <Route path="/Reviews" component={Reviews} />
        <Route path="/Contact" component={Contact} /> 
        <Route path="/supervisor" component={Supervisor} />
        <Route path="/student" component={Student} />
        <Route path="/login" component={Login} /> 
      </Switch>
    </Router>

  );
}

export default App;
