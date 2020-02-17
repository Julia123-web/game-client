import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./component/Home/index";
import Login from "./component/Login/index";
import SignUp from "./component/SignUp/index";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">
            <ul>HOME</ul>
          </Link>
          <Link to="/login">
            <ul>LOGIN</ul>
          </Link>
          <Link to="/signup">
            <ul>SIGNUP</ul>
          </Link>
        </nav>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </Router>
    </div>
  );
}

export default App;
