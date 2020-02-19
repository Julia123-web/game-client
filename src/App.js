import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./component/Home/index";
import Login from "./component/Login/index";
import SignUp from "./component/SignUp/index";
import Rooms from "./component/Rooms";
import Game from "./component/Game";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";

class App extends React.Component {
  stream = new EventSource("http://localhost:4000/stream");

  componentDidMount() {
    this.stream.onmessage = event => {
      const { data } = event;

      const action = JSON.parse(data);
      console.log(action);
      this.props.dispatch(action);
    };
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Nav defaultActiveKey="/" as="ul" className="justify-content-center">
            <Nav.Item as="li">
              <Nav.Link href="/">HOME</Nav.Link>
            </Nav.Item>
            <Nav.Link eventKey="disabled" disabled></Nav.Link>
            <Nav.Item as="li">
              <Nav.Link href="/login">LOGIN</Nav.Link>
            </Nav.Item>
            <Nav.Link eventKey="disabled" disabled></Nav.Link>
            <Nav.Item as="li">
              <Nav.Link href="/signup">SIGNUP</Nav.Link>
            </Nav.Item>
            <Nav.Link eventKey="disabled" disabled></Nav.Link>
            <Nav.Item as="li">
              <Nav.Link href="/rooms">ONLINE</Nav.Link>
            </Nav.Item>
            <Nav.Link eventKey="disabled" disabled></Nav.Link>
          </Nav>

          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/games" component={Game} />
        </Router>
      </div>
    );
  }
}

export default connect()(App);
