import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonGroup, Button } from "react-bootstrap";

export default class Levels extends Component {
  render() {
    return (
      <ButtonGroup>
        <Link to="/games/easy">EASY</Link>
        <Link to="/games/medium">MEDIUM</Link>
        <Link to="/games/difficult">DIFFICULT</Link>
      </ButtonGroup>
    );
  }
}
